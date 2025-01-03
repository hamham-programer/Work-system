const Joi = require('joi');

const resumeValidatioSchema = Joi.object({
  personalInfo: Joi.object({
    profilePicture: Joi.string().uri().optional(),
  }),
  education: Joi.array().items(
    Joi.object({
      degree: Joi.string().valid(
        'illiterate',
        'undergraduate',
        'diploma',
        'postgraduate diploma',
        'bachelors',
        'masters',
        'phd'
      ),
      fieldOfStudy: Joi.string().required(),
      institution: Joi.string().required(),
      startDate: Joi.date().required(),
      endDate: Joi.date().optional(),
      grade: Joi.string().optional(),
    })
  ),
  workExperience: Joi.array().items(
    Joi.object({
      company: Joi.string().required(),
      position: Joi.string().required(),
      startDate: Joi.date().required(),
      endDate: Joi.date().optional(),
      description: Joi.string().optional(),
    })
  ),
  skills: Joi.array().items(Joi.string().required()),
  languages: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      proficiency: Joi.string().valid('beginner', 'intermediate', 'advanced').required(),
    })
  ),
  certifications: Joi.array().items(
    Joi.object({
      title: Joi.string().required(),
      issuingOrganization: Joi.string().required(),
      issueDate: Joi.date().optional(),
      certificateLink: Joi.string().uri().optional(),
    })
  ),
  projects: Joi.array().items(
    Joi.object({
      title: Joi.string().required(),
      description: Joi.string().optional(),
      technologies: Joi.array().items(Joi.string()).optional(),
      projectLink: Joi.string().uri().optional(),
    })
  ),
  interests: Joi.array().items(Joi.string().optional()),
  objectives: Joi.string().optional(),
  attachments: Joi.array().items(
    Joi.object({
      fileName: Joi.string().required(),
      fileType: Joi.string().valid(
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/pdf'
      ).required(),
      filePath: Joi.string().required(),
    })
  ),
  videoResume: Joi.object({
    videoPath: Joi.string().uri().optional(),
    recordedAt: Joi.date().optional(),
    liveRecording: Joi.boolean().default(false),
  }).optional(),
});
module.exports = {resumeValidatioSchema}