const express = require("express");
const router = express.Router();
const cardRouter = require("./card-router");
const collectionRouter = require("./collection-router");
const { PREFIX } = require("../../global.config");

router.get(`${PREFIX}status`, (request, response) => {
  const data = {
    uptime: process.uptime(),
    message: "OK",
    date: new Date(),
  };

  response.status(200).json(data);
});

router.use(`${PREFIX}card`, cardRouter);
router.use(`${PREFIX}collection`, collectionRouter);

module.exports = router;
