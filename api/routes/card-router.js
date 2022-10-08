const express = require("express");
const router = express.Router();
const CardController = require("../controllers/cardController");

router.get("/", CardController.getAllCard);
router.get("/myCollection", CardController.getMyCollection);
router.patch("/purchase/:id", CardController.purchaseCard);

module.exports = router;
