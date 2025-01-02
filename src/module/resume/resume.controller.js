const autoBind = require("auto-bind");
const ResumeModel = require("./resume.model");
const ResumeMessage = require("./resume.message");
class ResumeController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = ResumeModel;
  }
  async createResume(req, res, next) {
    try {
      const { data } = req.body;
      const resume = await this.#service.createResume(data);
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
      const { data } = req.body;
      const { id } = req.params;
      await this.#service.updateResume(id, data);
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
