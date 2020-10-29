/* Rotas
 * B2ML Sistemas
 * Dev: diego.germiniani@b2ml.com.br
 * Desc.: Arquivo que descreve os endpoints do sistema
 */
const express = require("express");
const GenericController = require("./controllers/GenericController.js");

const routes = express.Router();

routes.get('/msg', GenericController.read);

routes.get('/', (req,res) => { res.sendFile(path.join(__dirname+'/client/build/index.html')); });

module.exports  = routes;
