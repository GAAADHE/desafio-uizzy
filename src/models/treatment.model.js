const mongoose = require('mongoose');


const AttachmentSchema = new mongoose.Schema({
  media_type: String,
  attach_id: String, // with this id we talk with resource server.
});

const Procedures = new mongoose.Schema({
  procedure_name:String,
  procedure_date:String,
  procedure_description:String,
  procedure_notes:String,
  procedure_attachments: [AttachmentSchema],
  procedure_involved_staff: [String]
});


const DataSchema = new mongoose.Schema({
  treatment_procedures:[Procedures],
},{
  timestamps:true
});


const treatments = mongoose.model('Treatments', DataSchema);
module.exports = treatments;