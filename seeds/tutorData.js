const { Tutor } = require('../models');

const tutordata = [
  {
    tutor_name: 'A',
    tutor_rateing: 1,
    
  },
  {
    tutor_name: 'B',
    tutor_rateing: 1,
   
  },
   {
    tutor_name: 'C',
    tutor_rateing: 1,
  
  },

];

const seedData = () => Tutor.bulkCreate(tutordata);

module.exports = seedData;
