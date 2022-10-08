const express = require("express");
const router = express.Router();
const CollectionController = require("../controllers/collectionController");
// const BookingControllers = require("../controllers/booking-management");
// const Authentication = require("../middlewares/Auth");

router.get("/", CollectionController.getAllCollection);
// router.get("/:id", BookingControllers.detail);
// router.post("/", BookingControllers.create);
// router.put("/:id", BookingControllers.update);

module.exports = router;
