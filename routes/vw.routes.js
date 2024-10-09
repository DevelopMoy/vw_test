const {Router}=require('express');
const routes = Router();
const vwController = require('../controllers/vw.controller');

// RUTAS DEL ENDPOINT USUARIOS

routes.post('/',vwController.createClaim);

module.exports = routes;