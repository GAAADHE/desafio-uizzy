const Treatment = require('../models/treatment.model'); // parent object

module.exports = {
  async index(req, res){
    const treatments = await Treatment.find();
    let procedures = treatments.map(function(value){
      return [... value.treatment_procedures];
    })
    res.json(procedures);
  },
  async create(req, res){
    const { _id_treatment, procedure_name, procedure_date, procedure_description, procedure_notes, procedure_attachments, procedure_involved_staff } = req.body
    const data = { procedure_name, procedure_date, procedure_description, procedure_notes, procedure_attachments, procedure_involved_staff };
    let treatment = await Treatment.findOne({ _id_treatment });
    treatment.treatment_procedures.push(data);
    let update = await treatment.save();
    res.json(update);
  },
  async details(req, res){
    const { _id_treatment, _id} = req.params;
    let treatment = await Treatment.findOne({ _id: _id_treatment });
    let details = treatment.treatment_procedures.filter(proce => proce._id.equals( _id ));
    console.log(details);
    res.json(details);
  },
  async delete(req, res){
    const { _id_treatment, _id } = req.params;
    let treatment = await Treatment.findOne({ _id: _id_treatment });
    treatment.treatment_procedures = treatment.treatment_procedures.filter(proce => !proce._id.equals(_id));
    let result = await treatment.save();
    res.json(result);
  },
  async update(req, res){
    const { _id_treatment, _id} = req.params;
    const { procedure_name, procedure_date, procedure_description, procedure_notes, procedure_attachments, procedure_involved_staff} = req.body;
    let treatment = await Treatment.findOne({ _id: _id_treatment });
    
    let index = treatment.treatment_procedures.findIndex(proce => {
      if(proce._id == _id){
        proce.procedure_name = procedure_name || proce.procedure_name;
        proce.procedure_date = procedure_date || proce.procedure_date;
        proce.procedure_description = procedure_description || proce.procedure_description;
        proce.procedure_notes = procedure_notes || proce.procedure_notes;
        proce.procedure_attachments = procedure_attachments || proce.procedure_attachments;
        proce.procedure_involved_staff = procedure_involved_staff || proce.procedure_involved_staff;
        return proce;
      }
    });

    let update = await treatment.save();

    let proce = treatment.treatment_procedures[index];

    res.json(proce);

  }
}