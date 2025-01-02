const multer = require("multer");
const fs = require("fs");
const path = require("path");
const createHttpError = require("http-errors");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdirSync(path.join(process.cwd(), "public", "upload"), {
      recursive: true,
    });
    cb(null, "public/upload");
  },
  filename: function(req, file, cb){
    
  }
});
