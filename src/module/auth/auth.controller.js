const CookieNames = require("../../common/constant/cookie.enum");
const NodeEnv = require("../../common/constant/env.enum");
const AuthMessage = require("./auth.message");
const authService = require("./auth.service");
const autoBind = require("auto-bind");
class AuthController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = authService;
  }
  async sendOTP(req, res, next) {
    try {
      const { userName, password } = req.body;
      const user = await this.#service.sendOTP(userName, password);
      return res.json({
        message: AuthMessage.SendOtoSuccessfully,
        mobile: user.mobile,
      });
    } catch (error) {
      return res.status(error?.status || 500).json({
        message: AuthMessage.SendOtoFaild,
        error: error.message,
      });
    }
  }
  async checkOTP(req, res, next) {
    try {
      const { code } = req.body;
      const token = await this.#service.checkOTP(code);
      return res
        .cookie(CookieNames.AccessToken, token, {
          httpOnly: true,
          secure: process.env.Node_ENv === NodeEnv.Production,
        })
        .status(200)
        .json({
          message: AuthMessage.LoginSuccessfully,
          token,
        });
    } catch (error) {
      next(error);
    }
  }
  async logout(req, res, next) {
    try {
      res.clearCookie(CookieNames.AccessToken)
      return res.status(200).json({
        message: AuthMessage.LogoutSuccessfuly,
      });
    } catch (error) {
      next(error);
    }
  }
}
//method singlton
module.exports = new AuthController(); //  از هر کلاسی یکبار نمونه میسازه
