const {
  userValidationSchema,
} = require("../../common/middlware/user.validation");
const UserService = require("./user.service");
const autoBind = require("auto-bind");
const UserMessage = require("./user.message");

class UserController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = UserService;
  }
  async registerUser(req, res, next) {
    try {
/*       console.log("Request Body:", req.body);
 */      const { value } = userValidationSchema.validate(req.body);
      await this.#service.registerUser(value);
      return res.json({
        message: UserMessage.RegisterSuccessfully,
      });
    } catch (error) {
      return res.status(error?.status || 500).json({
        message: UserMessage.RegisterFaild,
        error: error.message,
      });
    }
  }
  async whoami(req,res,nex){
    try {
      const user = req.user
      return res.json(user)
      
    } catch (error) {
      nex(error)
      
    }
  }
}

module.exports = new UserController();
