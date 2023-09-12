const sequelize = require('../config/connection');
const seedData = require('./tutorData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedData();

  

  process.exit(0);
};

seedAll();
