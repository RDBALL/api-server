'use strict';

class ModelInterface{
  constructor(model){
    this.model = model;
  }
  async create(json){
    try {
      let record = await this.model.create(json);
      return record;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async read(id = null){
    if (id) {
      
    }
  }
}

module.exports = ModelInterface;