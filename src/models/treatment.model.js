const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({
  treatment_procedures:[String],
},{
  timestamps:true
});


const treatments = mongoose.model('Treatments', DataSchema);
module.exports = treatments;