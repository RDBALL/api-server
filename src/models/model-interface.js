'use strict';

class ModelInterface {
  constructor(model) {
    this.model = model;
  }
  async create(json) {
    try {
      let record = await this.model.create(json);
      return record;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async read(id = null) {
    try {
      let record;
      if (id) {
        record = await this.model.findOne({where: {id}});
      } else {
        record = await this.model.findAll();
      }
      return record;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async update(json, id) {
    try {
      let record = await this.model.update(json, {where: {id}});
      return record;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async delete(id) {
    try {
      await this.model.destroy({where: {id}});
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = ModelInterface;