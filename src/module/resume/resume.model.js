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
const proficiencyEnum = ["beginner", "intermediate", "advanced"];
const ResumeSchema = new Schema(
  {
    personalInfo: {
      profilePicture: { type: String },
    },
    education: [
      {
        degree: { type: String, enum: educationalStatusEnum },
        fieldOfStudy: { type: String },
        institution: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        grade: { type: String },
      },
    ],
    workExperience: [
      {
        company: { type: String },
        position: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        description: { type: String },
      },
    ],
    skills: [{ type: String }],
    languages: [
      {
        name: { type: String },
        proficiency: { type: String, enum: proficiencyEnum, required: true },
      },
    ],
    certifications: [
      {
        title: { type: String },
        issuingOrganization: { type: String },
        issueDate: { type: Date },
        certificateLink: { type: String }, // لینک مدرک
      },
    ],
    projects: [
      {
        title: { type: String },
        description: { type: String },
        technologies: [{ type: String }], // تکنولوژی‌های استفاده‌شده
        projectLink: { type: String },
      },
    ],
    interests: [{ type: String }],
    objectives: { type: String },
    attachments: [
      {
        fileName: { type: String },
        fileType: { type: String },
        filePath: { type: String },
      },
    ],
    videoResume: {
      videoPath: { type: String },
      recordedAt: { type: Date },
    },
  },
  {
    timestamps: true,
  }
);

const ResumeModel = model("resume", ResumeSchema);
module.exports = ResumeModel;
