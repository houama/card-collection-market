const express = require("express");
const router = express.Router();
const CollectionController = require("../controllers/collectionController");

router.get("/", CollectionController.getAllCollection);

module.exports = router;
