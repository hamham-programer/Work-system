const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
function swaggerConfig(app) {
  const swaggerDocument = swaggerJSDoc({
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "employment-backend",
        description: "developed by hamidreza-shafiei",
        version: "1.0.0",
      }
    },
    apis: [process.cwd() + "/src/module/**/*.swagger.js"],
  });
  const swagger = swaggerUi.setup(swaggerDocument, {});
  app.use("/swagger", swaggerUi.serve, swagger);
}
module.exports = swaggerConfig;
