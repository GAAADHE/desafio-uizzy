const express = require('express');

const routes = express.Router();

const User = require('./controllers/user.controller');
const Treatment = require('./controllers/treatment.controller');
const Procedure = require('./controllers/procedure.controller')
// user
routes.get('/api/users', User.index);
routes.post('/api/users', User.create);
routes.get('/api/users.details/:_id', User.details);
routes.delete('/api/users/:_id', User.delete);
routes.put('/api/users/', User.update);

// treatment
routes.get('/api/treatments', Treatment.index);
routes.post('/api/treatments',Treatment.create);
routes.get('/api/treatments.details/:_id', Treatment.details);
routes.delete('/api/treatments/:_id', Treatment.delete);
routes.put('/api/treatments/', Treatment.update);

// procedures

routes.get('/api/procedures', Procedure.index);
routes.post('/api/procedures/:_id_treatment',Procedure.create);
routes.get('/api/procedures.details/:_id_treatment/:_id', Procedure.details);
routes.delete('/api/procedures/:_id_treatment/:_id', Procedure.delete);
routes.put('/api/procedures/:_id_treatment/:_id', Procedure.update);

module.exports = routes