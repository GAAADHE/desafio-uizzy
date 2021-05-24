const mongoose = require('mongoose');

const AttachmentSchema = new mongoose.Schema({
  media_type: String,
  attach_id: String, // with this id we talk with resource server.
});

const Attachment = mongoose.model('Attachment', AttachmentSchema);
module.exports = Attachment;