const { Tutor } = require('../models');

const tutordata = [
  {
    tutor_name: 'example 1',
    tutor_rateing: 1,
    
  },
  {
    tutor_name: 'example 2',
    tutor_rateing: 1,
   
  },
   {
    tutor_name: 'example 3',
    tutor_rateing: 1,
  
  },

];

const seedData = () => Tutor.bulkCreate(tutordata);

module.exports = seedData;
