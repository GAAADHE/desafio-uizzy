const mongoose = require('mongoose');
const AttachmentSchema = require('./attach.model');

const ProceduresSchema = new mongoose.Schema({
  procedure_name:String,
  procedure_date:String,
  procedure_description:String,
  procedure_notes:String,
  procedure_attachments: [AttachmentSchema.schema],
  procedure_involved_staff: [String]
},{ timestamps:true });


const Procedure = mongoose.model('Procedure', ProceduresSchema);
module.exports = Procedure;