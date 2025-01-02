const { Router } = require("express");
const resumeController = require("./resume.controller");
const router = Router();
router.post("/createResume", resumeController.createResume)
router.get("/getResume", resumeController.getResume)
router.put("/updateResume", resumeController.updateResume)
router.delete("/deleteResume", resumeController.deleteResume)

module.exports = {
  ResumeRouter: router,
};
