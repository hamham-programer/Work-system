const autoBind = require("auto-bind");
const UserModel = require("../user/user.model");
const createHttpError = require("http-errors");
const AuthMessage = require("./auth.message");
const { randomInt } = require("crypto");
const jwt = require("jsonwebtoken");
const sendOtpMessage = require("../../config/sendOTPMessage.config");

class AuthService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }
  async sendOTP(userName, password) {
    const user = await this.#model.findOne({
      "userPassword.userName": userName,
    });
    const now = new Date().getTime();
    const otp = {
      code: randomInt(10000, 99999), // تولید یک کد 5 رقمی
      expiresIn: now + 1000 * 60 * 3, // زمان انقضا: 3 دقیقه
    };
    if (!user || user.userPassword.password !== password) {
      throw createHttpError.Unauthorized(AuthMessage.InvalidCredentials);
    }
    if (user.otp && user.otp.expiresIn > now) {
      throw new createHttpError.BadRequest(AuthMessage.OtpCodeNotExpired);
    }
    user.otp = otp;
    await user.save();
    await sendOtpMessage(user.mobile, otp.code);
    return user;
  }
  async checkOTP(code) {
    const usercode = await this.#model.findOne({ "otp.code": code });
    const now = new Date().getTime();
    if (usercode?.otp?.expiresIn < now)
      throw new createHttpError.Unauthorized(AuthMessage.OtpCodeExpired);
    if (usercode?.otp?.code !== code)
      throw new createHttpError.Unauthorized(AuthMessage.otpCodeIsIncorrect);
    if (!usercode.verifiedMobile) {
      usercode.verifiedMobile = true;
    }
    const accessToken = this.singnToken({
      mobile: usercode.mobile,
      id: usercode._id,
    });
    /*      user.accessToken = accessToken
      await usercode.save()
       return usercode
 */ return { accessToken, usercode };
  }
  singnToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1y" });
  }

  async logout() {}
}
module.exports = new AuthService();
