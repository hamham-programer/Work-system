const multer = require("multer");
const fs = require("fs");
const path = require("path");
const createHttpError = require("http-errors");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadFile;

    // مسیر ذخیره‌سازی برای فایل‌های PDF، Word و Excel
    if (file.mimetype === "application/pdf") {
      uploadFile = path.join(process.cwd(), "public", "upload", "pdf");
    } else if (
      file.mimetype === "application/msword" ||
      file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      uploadFile = path.join(process.cwd(), "public", "upload", "word");
    } else if (
      file.mimetype === "application/vnd.ms-excel" ||
      file.mimetype === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      uploadFile = path.join(process.cwd(), "public", "upload", "excel");
    } else {
      return cb(new createHttpError.BadRequest("فرمت فایل مجاز نیست"));
    }

    fs.mkdirSync(uploadFile, { recursive: true });
    cb(null, uploadFile);
  },

  filename: function (req, file, cb) {
    const whiteListPdfFormats = ["application/pdf"];
    const whiteListWordFormats = [
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const whiteListExcelFormats = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];

    const isPdf = whiteListPdfFormats.includes(file.mimetype);
    const isWord = whiteListWordFormats.includes(file.mimetype);
    const isExcel = whiteListExcelFormats.includes(file.mimetype);

    if (isPdf || isWord || isExcel) {
      const format = path.extname(file.originalname); 
      const filename = new Date().getTime().toString() + format;
      cb(null, filename);
    } else {
      cb(new createHttpError.BadRequest("فرمت انتخابی فایل مناسب نیست"));
    }
  },
});

const uploadFiles  = multer({
  storage,
  limits: {
    fileSize: 5 * 1000 * 1000, 
  },
});

module.exports = {
  uploadFiles ,
};
