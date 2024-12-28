const UserModel = require("./user.model");
const autoBind = require("auto-bind");
const { randomInt } = require("crypto");
const createHttpError = require("http-errors");
const sendUserPassMessage = require("../../config/sendUserPassMessage.config");
const UserMessage = require("./user.message");
class UserService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }
  async registerUser(userData) {
    const userPassword = {
      userName: userData.nationalCode,
      password: randomInt(100000, 999999),
    };
    const user = await this.#model.findOne({
      $or: [
        { nationalCode: userData.nationalCode },
        { mobile: userData.mobile },
      ],
    });
    if (user) {
      throw new createHttpError.BadRequest(UserMessage.RegisterFaild);
    }
    if (!user) {
      const newUser = await this.#model.create({
        ...userData,
        userPassword,
      });
      await sendUserPassMessage(
        userData.mobile,
        userPassword.userName,
        userPassword.password
      );
      return newUser;
    }
    user.userPassword = userPassword;
    await user.save();
    await sendUserPassMessage(
      userData.mobile,
      userPassword.userName,
      userPassword.password
    );
    return user;
  }
}

module.exports = new UserService();
