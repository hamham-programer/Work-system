const autoBind = require("auto-bind");
const ResumeMessage = require("./resume.message");
const { resumeValidatioSchema } = require("../../common/middlware/resume.validation");
const resumeService = require("./resume.service");
class ResumeController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = resumeService;
  }
  async createResume(req, res, next) {
    try {
      const {value} = resumeValidatioSchema.validate(req.body)
      const resume = await this.#service.createResume(value);
      return res.json({
        message: ResumeMessage.ResumeSuccessfully,
        resume,
      });
    } catch (error) {
      next(error);
    }
  }

  async getResume(req, res, next) {
    try {
      const { id } = req.params;
      const resume = await this.#service.getResume(id);
      return res.json({
        message: ResumeMessage.ResumeGetSuccessfully,
        resume,
      });
    } catch (error) {
      next(error);
    }
  }
  async updateResume(req, res, next) {
    try {
      const {value} = await resumeValidatioSchema.validate(req.body)
      const { id } = req.params;
      const resume = await this.#service.updateResume(id, value);
      return res.json({
        message: ResumeMessage.ResumeUpdateSuccessfully,
        resume
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteResume(req, res, next) {
    try {
      const { id } = req.params;
      await this.#service.deleteResume(id);
      return res.json({
        message: ResumeMessage.ResumeDeleteSuccessfully,
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new ResumeController();
