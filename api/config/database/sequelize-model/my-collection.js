module.exports = (sequelize, type) => {
  return sequelize.define(
    "myCollection",
    {
      id: {
        type: type.UUID,
        defaultValue: type.UUIDV4,
        primaryKey: true,
      },
      // collection_id: {
      //   type: type.UUID,
      //   defaultValue: type.UUIDV4,
      // },
      card_name: {
        type: type.STRING,
      },
      // collection_name: {
      //   type: type.STRING,
      // },
      price: {
        type: type.STRING,
      },
      img: {
        type: type.STRING,
      },
      created_date: {
        type: "TIMESTAMP",
        defaultValue: type.NOW,
        allowNull: true,
      },
      updated_date: {
        type: "TIMESTAMP",
        defaultValue: type.NOW,
        allowNull: true,
      },
      deleted_date: {
        type: "TIMESTAMP",
        defaultValue: type.NOW,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
