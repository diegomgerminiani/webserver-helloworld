/* Middleware <Status> 
 * B2ML Sistemas
 * Dev: diego.germiniani@b2ml.com.br
 * Desc.: Middlewares de respostas de status
 */
/* const status = require('http-status'); */

module.exports = {
    status404: function status404(req, res, next) {
        res.status(404).send(); 
    },
    
    status500: function status500(error, req, res, next) { 
        res.status(500).json({ error }); 
        console.log({ error });
    }

}