const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tutor extends Model {}

Tutor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tutor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tutor_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:1,
      
    },
  },
  
  {
    
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutor',
  }
);

module.exports = Tutor;