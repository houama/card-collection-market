const Response = require("../dto/response");
const CollectionModel = require("../models/collection-model");

class CollectionController {
  static async getAllCollection(req, res) {
    try {
      const response = new Response();

      const collectionList = await CollectionModel.getAll();

      response.message = "Sucessfully get all card collection list!";
      response.results = collectionList;
      response.request.type = "GET";
      response.request.url = req.originalUrl;

      return res.status(200).json(response);
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  }
}

module.exports = CollectionController;
