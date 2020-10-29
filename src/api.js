/* Application 
 * B2ML Sistemas
 * Dev: diego.germiniani@b2ml.com.br
 * Desc.: Configurações da aplicação
 */
const path = require('path');
/* const dotenv = require('dotenv'); */
const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
const { status404, status500 } = require('./middlewares/Status.js');

/* dotenv.config(); */

class API {
    constructor() {
        this.express = express();
        this.express.disable('etag');
        
        //Middlewares
        this.express.use(express.static(path.join(__dirname, 'client/build')));
        this.express.use(express.json());
        this.express.use(express.urlencoded({extended: true}));
        this.express.use(cors({origin: '*'}));
        this.express.use(routes);
        this.express.use(status404);
        this.express.use(status500);

    }
}

module.exports = new API().express;