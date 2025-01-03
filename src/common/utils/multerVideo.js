const multer = require("multer");
const fs = require("fs");
const path = require("path");
const createHttpError = require("http-errors");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdirSync(path.join(process.cwd(), "public", "upload", "videos"), { recursive: true });
    cb(null, "public/upload/videos");
  },
  filename: function (req, file, cb) {
    const whiteListFormat = [
      "video/mp4",
      "video/mkv",
      "video/webm",
      "video/avi",
    ];
    if (whiteListFormat.includes(file.mimetype)) {
      const format = path.extname(file.originalname);
      const filename = new Date().getTime().toString() + format;
      cb(null, filename);
    } else {
      cb(new createHttpError.BadRequest("فرمت انتخابی فایل مناسب نیست"));
    }
  },
});

const uploadVideo  = multer({
  storage,
  limits: {
    fileSize: 50 * 1000 * 1000, 
  },
});

module.exports = {
  uploadVideo,
};
