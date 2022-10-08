const express = require("express");
const next = require("next");
const routes = require("./api/routes");
const { PORT, NODE_ENV } = require("./global.config");

const port = PORT || 3000;
const dev = NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const {
  Card,
  Collection,
  myCollection,
} = require("./api/config/database/sequelize-model");

const { connectSequelize } = require("./api/config/database/connectSequelize");

connectSequelize();

Card.sync({ logging: console.log });
Collection.sync({ logging: console.log });
myCollection.sync({ logging: console.log });

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.urlencoded({ extended: false }));
    server.use(express.json());

    server.use("/", routes);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
