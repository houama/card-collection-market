module.exports = (sequelize, type) => {
  return sequelize.define(
    "collection",
    {
      id: {
        type: type.UUID,
        defaultValue: type.UUIDV4,
        primaryKey: true,
      },
      collection_name: {
        type: type.STRING,
      },
      created_date: {
        type: "TIMESTAMP",
        defaultValue: sequelize.NOW,
        allowNull: true,
      },
      updated_date: {
        type: "TIMESTAMP",
        defaultValue: sequelize.NOW,
        allowNull: true,
      },
      deleted_date: {
        type: "TIMESTAMP",
        defaultValue: sequelize.NOW,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
