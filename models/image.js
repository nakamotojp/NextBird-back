module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      src: {
        // Store in S3
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };

  return Image;
};
