const express = require('express');
const familiaController = require('./controllers/FamiliaController');
const routes = express.Router();

routes.get('/carregardados/:pag', familiaController.carregarFamilias);
routes.get('/index/:pag', familiaController.index);

module.exports = routes;