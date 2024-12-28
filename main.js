const express = require("express");
const dotenv = require("dotenv");
const swaggerConfig = require("./src/config/swagger.config");
const mainRouter = require("./src/app.routes");
const { NotfoundHandler } = require("./src/common/exception/not-found.handler");
const {
  AllExceptionHandler,
} = require("./src/common/exception/all-exception.handler");
const cookieParser = require("cookie-parser");
dotenv.config();
async function main() {
  const app = express();
  const port = process.env.PORT;
  require("./src/config/mongoose.config");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(process.env.COOKIE_SECRET_KE))
  swaggerConfig(app);
  app.use(mainRouter);
  NotfoundHandler(app);
  AllExceptionHandler(app);
  app.listen(port, () => {
    console.log(`server run on port : http://localhost:${port}`);
  });
}
main();
