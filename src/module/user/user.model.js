const { required } = require("joi");
const { Schema, model } = require("mongoose");
const educationalStatusEnum = [
  "illiterate",
  "undergraduate",
  "diploma",
  "postgraduate diploma",
  "bachelors",
  "masters",
  "phd",
];

const Roles = {
  USER: "USER",
  ADMIN: "ADMIN",
  SUPER_ADMIN: "SUPER_ADMIN",
};

const OTPSchema = new Schema({
  code: { type: String, required: false, default: undefined },
  expiresIn: { type: Number, required: false, default: 0 },
});
const generatedPassword = new Schema({
  userName: { type: String, required: false, default: undefined },
  password: { type: String, required: false },
});

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    family: { type: String, required: true, unique: true },
    nationalCode: { type: String, required: true }, //کدملی
    birthCertificateNumber: { type: String, required: true }, //شماره شناسنامه
    serialNumber: {
      type: String,
      required: true,
    }, //سریال شناسنامه
    birthPlace: { type: String, required: true }, //محل تولد
    birthDate: { type: Date, required: true }, //تاریخ تولد
    certificateIssuanceDate: {
      type: Date,
      required: true,
    }, //تاریخ صدور شناسنامه
    certificateIssuancePlace: { type: String, required: true }, //محل صدور شناسنامه
    fatherName: { type: String, required: true }, // نام پدر
    maritalStatus: {
      type: String,
      required: true,
      enum: ["single", "married"],
    }, // وضعیت تاهل
    degree: { type: String, required: true, enum: educationalStatusEnum }, //مدرک تحصیلی
    universityName: { type: String, required: true }, // نام دانشگاه
    educationPlace: { type: String, required: true }, //محل تحصیل
    educationalStatus: { type: String, required: true }, //وضعیت تحصیل
    gender: { type: String, required: true, enum: ["famel", "male"] }, //جنسیت
    numberOfChildren: { type: Number, required: true }, //تعداد فرزندان
    militaryServiceStatus: {
      //وضعیت پایان خدمت
      type: String,
      required: true,
      enum: ["Exempt", "Conscription", "Cardholder"],
    },
    militaryServiceEndDate: { type: Date }, //تاریخ پایان خدمت
    address: { type: String, required: true }, //آدرس
    mobile: { type: String, required: false, unique: true },
    otp: { type: OTPSchema },
    userPassword: generatedPassword,
    verifiedMobile: { type: Boolean, required: false, default: false },
    accessToken: { type: String },
    refreshToken: { type: String },
    role: { type: String, default: Roles.USER },
    isProfileCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserModel = model("user", userSchema);

module.exports = UserModel;
