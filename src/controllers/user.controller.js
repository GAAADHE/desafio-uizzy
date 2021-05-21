const User = require('../models/user.model');

module.exports = {
  index(req, res){
    res.json({message: "User Controller"});
  },
  async create(req, res){
    const { username, user_email, user_type, user_password} = req.body;

    let data = {};

    let user = Usuario.findOne({user_email});
    if(!user){
      data = {username, user_email, user_type, user_password};
      user = await User.create(data);
      return res.status(200).json(user);
    }else{
      return res.status(500).json(user);
    }

  }
}