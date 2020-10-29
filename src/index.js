/* Server 
 * B2ML Sistemas
 * Dev: diego.germiniani@b2ml.com.br
 * Desc.: Inicializador do server
 */
const api = require('./api.js');

const port = 3001;
const host = 'localhost';
/* const port = process.env.API_PORT || 3001;
const host = process.env.API_HOST || 'localhost'; */

api.listen(port, host, () => {
    console.log(`================================================`);
    console.log(`API executando em: http://${host}:${port}`);
    console.log(`================================================`); 
});


