const express = require('express');

const routes = express.Router();

const User = require('./controllers/user.controller');
const Treatment = require('./controllers/tratment.controller');
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
module.exports = routes;