const express = require('express');
const consign = require('consign');
const bodyParser = require ('body-parser');

const app = express();

consign().include('./src/controllers').into(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(3333, ()=>{
    console.log('Servidor Rodando');
});

