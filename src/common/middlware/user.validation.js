const Joi = require("joi");

const userValidationSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  family: Joi.string().min(2).max(50).required(),
  nationalCode: Joi.string()
    .pattern(/^\d{10}$/)
    .required(),
  birthCertificateNumber: Joi.string().required(),
  serialNumber: Joi.string()
    .pattern(/^[\u0600-\u06FF]{1}-\d{2}\/\d{6}$/)
    .required(),
  birthPlace: Joi.string().required(),
  birthDate: Joi.date().iso().required(),
  certificateIssuanceDate: Joi.date().iso().required(),
  certificateIssuancePlace: Joi.string().required(),
  fatherName: Joi.string().required(),
  maritalStatus: Joi.string().valid("single", "married").required(),
  degree: Joi.string()
    .valid(
      "illiterate",
      "undergraduate",
      "diploma",
      "postgraduate diploma",
      "bachelors",
      "masters",
      "phd"
    )
    .required(),
  universityName: Joi.string().required(),
  educationPlace: Joi.string().required(),
  educationalStatus: Joi.string().required(),
  gender: Joi.string().valid("famel", "male").required(),
  numberOfChildren: Joi.number().integer().min(0).required(),
  militaryServiceStatus: Joi.string()
    .valid("Exempt", "Conscription", "Cardholder")
    .required(),
  militaryServiceEndDate: Joi.date().iso().optional(),
  address: Joi.string().required(),
  mobile: Joi.string()
    .pattern(/^09\d{9}$/)
    .required(),
});

module.exports = { userValidationSchema };
