const { bolafy_db, Sequelize } = require("../connectSequelize");
const cardModel = require("./card");
const collectionModel = require("./collection");
const myCollectionModel = require("./my-collection");

const Card = cardModel(bolafy_db, Sequelize);
const Collection = collectionModel(bolafy_db, Sequelize);
const myCollection = myCollectionModel(bolafy_db, Sequelize);

// Card.belongsTo(Collection, { foreignKey: "collection_id" });
// Collection.hasMany(Card, { foreignKey: "collection_id" });

module.exports = { Card, Collection, myCollection };
