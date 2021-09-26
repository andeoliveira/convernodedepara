const express = require('express');
const familiaController = require('./controllers/FamiliaController');
const routes = express.Router();

routes.get('/carregardados', familiaController.carregarFamilias);
routes.get('/index', familiaController.index);

module.exports = routes;