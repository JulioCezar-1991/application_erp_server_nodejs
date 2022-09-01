'use strict';

const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect(config.connectionString, {
    useNewUrlParser: true, 
    }); 

// Carrega os Models

const Customer =  require('./models/customer-model');
const Client = require('./models/client-model');
const Product = require('./models/product-model');
const Order =  require('./models/order-model');

// Carregar Rotas
const indexRoute = require('./routes/index-route');
const customerRoute = require('./routes/customer-router');
const clientRoute = require('./routes/client-router');
const productRoute = require('./routes/product-route');

const orderRoute = require('./routes/order-route');

app.use(bodyParse.json({
    limit: '5mb'
}));
app.use(bodyParse.urlencoded({extended: false}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/customers', customerRoute);
app.use('/clients', clientRoute)
app.use('/products', productRoute);
app.use('/orders', orderRoute);

module.exports = app;

//Iniciar o NPM
// npm init -y

//Pacotes necessario para roda o projeto...
//npm install http express debug --save