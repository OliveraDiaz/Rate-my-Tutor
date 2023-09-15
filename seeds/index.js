const sequelize = require('../config/connection');
const seedData = require('./tutorData');
const seedUserData = require('./userData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedData();

  await seedUserData();

  process.exit(0);
};

seedAll();
