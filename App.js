const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const RotaPersonagens = require('./rotas/Personagens');
const RotaPlanetas = require('./rotas/Planetas');
const RotaNaves = require('./rotas/Naves');
const RotaEspecies = require('./rotas/Especies');
const Viagem = require('./Viagem');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/Personagens',RotaPersonagens );
app.use('/Planetas',RotaPlanetas );
app.use('/Naves',RotaNaves );
app.use('/Especies',RotaEspecies);
app.use('/Viagem',Viagem);

module.exports = app;