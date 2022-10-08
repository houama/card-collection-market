const { Collection } = require("../config/database/sequelize-model");

class CollectionModel {
  static async getAll() {
    try {
      const collectionData = await Collection.findAll();

      return collectionData;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = CollectionModel;
