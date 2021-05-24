const Procedure = require('../models/procedure.model');

module.exports = {
  async index(req, res){
    const procedures = await Procedure.find();
    res.json(procedures);
  },
  async create(req, res){
    const { procedure_name, procedure_date, procedure_description, procedure_notes, procedure_attachments, procedure_involved_staff } = req.body
    const data = { procedure_name, procedure_date, procedure_description, procedure_notes, procedure_attachments, procedure_involved_staff };
    const result = await Procedure.create(data);
    res.json(result);
  },
  async details(req, res){
    const { _id } = req.params;
    let procedure = await Procedure.findOne({ _id });
    res.json(procedure);
  },
  async delete(req, res){
    const { _id } = req.params;
    let procedure = await Procedure.findByIdAndRemove({ _id });
    res.json(procedure);
  },
  async update(req, res){
    const { _id } = req.params;
    const { procedure_name, procedure_date, procedure_description, procedure_notes, procedure_attachments, procedure_involved_staff } = req.body;
    const data =  { procedure_name, procedure_date, procedure_description, procedure_notes, procedure_attachments, procedure_involved_staff };
    let procedure = await Procedure.findOneAndUpdate({ _id }, data, {new: true});
 
    res.json(procedure);

  }
}