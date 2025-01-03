const autoBind = require("auto-bind");
const ResumeModel = require("./resume.model");
const createHttpError = require("http-errors");
const ResumeMessage = require("./resume.message");

class ResumeService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = ResumeModel
  }
  async createResume(value) {
    try {
        const resume = await this.#model.create(value)
        return resume         
        
    } catch (error) {
      throw error
        
    }
  }
  async getResume(id){
    try {
      const resume = await this.#model.findById(id)
      if(!resume){
        throw new createHttpError.NotFound(ResumeMessage.NotFound)
      }          
      return resume
    } catch (error) {
      throw error      
    }
  }
  async updateResume(id, value){
    try {
      const resume = await this.#model.findByIdAndUpdate(id, value)
      if(!resume){
        throw new createHttpError.NotFound(ResumeMessage.NotFound)
      }
      return resume
      
    } catch (error) {
      throw error
      
    }
  }
  async deleteResume(id){
    try {
      const resume = await this.#model.findByIdAndDelete(id)
      if(!resume){
        throw new createHttpError.NotFound(ResumeMessage.NotFound)
      }
      return     
      
    } catch (error) {
      throw error
      
    }
  }
}
module.exports = new ResumeService();
