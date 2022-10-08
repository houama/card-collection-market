const Response = require("../dto/response");
const CardModel = require("../models/card-model");

class CardController {
  static async getAllCard(req, res) {
    try {
      const response = new Response();

      const cardList = await CardModel.getAll();

      response.message = "Sucessfully get all card list!";
      response.results = cardList;
      response.request.type = "GET";
      response.request.url = req.originalUrl;

      return res.status(200).json(response);
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  }

  static async purchaseCard(req, res) {
    try {
      const id = req.params.id;
      console.log(id);
      const response = new Response();

      const purchasedCard = await CardModel.purchase(id);

      response.message = "Sucessfully purchased a new card!";
      response.results = purchasedCard;
      response.request.type = "PATCH";
      response.request.url = req.originalUrl;

      return res.status(200).json(response);
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  }
}

module.exports = CardController;
