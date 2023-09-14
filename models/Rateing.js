const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rateing extends Model {}

Rateing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tutor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tutor',
        key: 'id',
      },
    },
  },
  
  {
    
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'rateing',
  }
);

module.exports = Rateing;