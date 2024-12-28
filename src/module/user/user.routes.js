const { Router } = require("express");
const userController = require("./user.controller");
const { Authorization } = require("../../common/guard/authorization.guard");

const router = Router();
router.post("/submit", userController.registerUser);
router.get("/whoami",Authorization ,userController.whoami);

module.exports = {
  UserRouter: router,
};
