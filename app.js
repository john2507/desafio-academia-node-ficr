const express = require('express');
const routes = express.Router();
const bodyParser = require ('body-parser');
const app = express();
const index = require('./src/routes/index');
const controllerApi = require('./src/controllers/controllerApi')
const controllerface = require('./src/controllers/controllerFace');


app.set('json spaces',4)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// rotas 
app.use('/', index);
app.get('/api/curriculo/', controllerApi);
app.get('/api/face/', controllerface.show);

app.listen(3333, ()=>{
    console.log('Servidor Rodando na port: 3333');
});

