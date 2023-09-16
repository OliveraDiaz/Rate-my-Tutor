const User = require('./User');
const Tutor = require('./Tutor');
const Rateing = require('./Rateing')

//tutor has many ratings
Tutor.hasMany(Rateing,{
  foreignKey:'tutor_id', 
  onDelete:'CASCADE'
})

//rating belongs to tutor
Rateing.belongsTo(Tutor,{
  foreignKey:'tutor_id',

})
module.exports = {
  User, 
  Tutor,
  Rateing
};