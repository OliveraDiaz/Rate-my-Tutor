const { User } = require('../models');

const userData = [
  {
   username: 'Rodgers',
   password: '1234567',
  },
  {
   username: 'Romo',
   password: '123456789',
  },
   {
    username: 'Brady',
    password: '12345678',
  },

];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;
