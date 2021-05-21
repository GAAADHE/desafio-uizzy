const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const DataSchema = new mongoose.Schema({
  username:String,
  user_email:String,
  user_type:{type:Number, default:1},
  user_password:String,
},{
  timestamp:true
});

DataSchema.pre('save', function(next){
  if(!this.isModified("user_password")){
    return next();
  }
  this.user_password = bcrypt.hashSync(this.user_password,10);
  return next();
});

const users = mongoose.model('Users', DataSchema);
module.exports = users;