const createHttpError = require("http-errors");
const { AuthorizationMessage } = require("../message/auth.message");
const jwt = require("jsonwebtoken");
const UserModel = require("../../module/user/user.model");
require("dotenv").config()
const Authorization = async(req, res, nex) => {
  try {
    const token = req?.cookies?.access_token?.accessToken
    console.log(req.cookies);

    if (!token) {
      throw new createHttpError.Unauthorized(AuthorizationMessage.login);
    }
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY)
    if(typeof data === "object" && "id" in data){
        const user = await UserModel.findById(data.id,{_id: 1, mobile:1, createdAt:1})
        if(!user) throw new createHttpError.Unauthorized(AuthorizationMessage.NotFoundAccount)
            req.user = user
        return nex()
    }
    throw new createHttpError.Unauthorized(AuthorizationMessage.InvalidToken)

  } catch (error) {
    nex(error);
  }
};
module.exports = {
    Authorization
}
