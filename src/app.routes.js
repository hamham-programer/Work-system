const { Router } = require("express");
const { UserRouter } = require("./module/user/user.routes");
const { AuthRouter } = require("./module/auth/auth.routes");

const mainRouter = Router()

mainRouter.use("/register", UserRouter)
mainRouter.use("/auth", AuthRouter)


module.exports =  mainRouter
