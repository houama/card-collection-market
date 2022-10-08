const express = require("express");
const router = express.Router();
const CardController = require("../controllers/cardController");
// const BookingControllers = require("../controllers/booking-management");
// const Authentication = require("../middlewares/Auth");

router.get("/", CardController.getAllCard);
// router.get("/:id", BookingControllers.detail);
// router.post("/", BookingControllers.create);
// router.put("/:id", BookingControllers.update);

module.exports = router;
