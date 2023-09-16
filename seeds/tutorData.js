const { Tutor } = require('../models');

const tutordata = [
  {
    tutor_name: 'A',
   
    
  },
  {
    tutor_name: 'B',
   
   
  },
   {
    tutor_name: 'C',
    
  
  },

];

const seedData = () => Tutor.bulkCreate(tutordata);

module.exports = seedData;
