const express = require('express');
const routes = express.Router();
const bodyParser = require ('body-parser');
const app = express();
const index = require('./src/routes/indes');
const controllerApi = require('./src/controllers/controllerApi')
// rotas
app.use('/admin', index);
app.set('json spaces',4)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/api/curriculo', controllerApi)

app.listen(3333, ()=>{
    console.log('Servidor Rodando na port: 3333');
});

