const { Router } = require("express");
const resumeController = require("./resume.controller");
const { uploadImage } = require("../../common/utils/multerPic");
const { uploadFiles } = require("../../common/utils/multerWEP");
const { uploadVideo } = require("../../common/utils/multerVideo");
const router = Router();
router.post("/createResume",
  uploadImage.array("images", 10),
  uploadFiles.fields([{
    name:"attachments", maxCount: 5
  }]),
  uploadVideo.single("videoResume"),
resumeController.createResume)
router.get("/getResume", resumeController.getResume)
router.put("/updateResume/:id",
  uploadImage.array("images", 10),
  uploadFiles.fields([{
    name:"attachments", maxCount: 5
  }]),
  uploadVideo.single("videoResume"),
  resumeController.updateResume)
router.delete("/deleteResume/:id", resumeController.deleteResume)

module.exports = {
  ResumeRouter: router,
};
