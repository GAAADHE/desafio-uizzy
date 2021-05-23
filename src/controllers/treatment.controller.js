const Treatment = require('../models/treatment.model');

module.exports = {
  async index(req, res){
    const treatments = await Treatment.find();
    res.json(treatments);
  },
  async create(req, res){
    const {treatment_type, treatment_procedures} = req.body;
    let data = { treatment_type, treatment_procedures };
    let treatment = await Treatment.create(data);
    res.status(200).json(treatment);
  },
  async details(req, res){
    const { _id } = req.params;
    let treatment = await Treatment.findOne({ _id });
    res.json(treatment);
  },
  async delete(req, res){
    const { _id } = req.params;
    let treatment = await Treatment.findByIdAndDelete({ _id });
    res.json(treatment);
  },
  async update(req, res){
   const { _id, treatment_procedures } = req.body;
   const data = { treatment_procedures };
   const user = await Treatment.findOneAndUpdate({ _id }, data, { new:true });
   res.json(user);
  }
}