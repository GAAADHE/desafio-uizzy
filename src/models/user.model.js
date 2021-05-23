const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdressSchema = mongoose.Schema({
  city: String,
  street: String,
  houseNumber: String,
}, { _id : false });

const BirthdaySchema = mongoose.Schema({
  month: Number,
  day: Number,
  year: Number
}, { _id : false });

const ContactInfoSchema = mongoose.Schema({
  tel: String,
  adress: {
    type: AdressSchema,
    required: false
  }
}, { _id : false });

const HealthInfoSchema = mongoose.Schema({
  user_birthday:BirthdaySchema,
  user_blood_type:{type: String, default: "not informed."}
}, { _id : false });

const DataSchema = new mongoose.Schema({
  user_name:String,
  user_email:String,
  user_type:{type:Number, default:1},
  user_password:String,
  user_health_info: HealthInfoSchema,
  user_contact_info: ContactInfoSchema
},{
  timestamps:true
});

DataSchema.pre('save', function(next){
  if(!this.isModified("user_password")){
    return next();
  }
  this.user_password = bcrypt.hashSync(this.user_password,10);
  next();
});

DataSchema.pre('findByIdAndUpdate', function(next){
  var password = this.getUpdate().user_password + '';
  if(password.length < 55){
    this.getUpdate().user_password = bcrypt.hashSync(password, 10);
  }
});

const users = mongoose.model('Users', DataSchema);
module.exports = users;