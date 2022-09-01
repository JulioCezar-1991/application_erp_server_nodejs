'use stricy';

const repository = require('../repositories/order-repository');
const guid = require('guid'); // Utilizado para gerar o numero do pedido

exports.getOrderAll = async(req, res, next) => {
    try {
    var data = await repository.getOrderAll();
    res.status(200).send(data);
    
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getOrderOpen = async(req, res, next) => {
    try {
    var data = await repository.getOrderOpen();
    res.status(200).send(data);
    
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getOrderDone = async(req, res, next) => {
    try {
    var data = await repository.getOrderDone();
    res.status(200).send(data);
    
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getOrderCanceled = async(req, res, next) => {
    try {
    var data = await repository.getOrderCanceled();
    res.status(200).send(data);
    
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    try {
        await repository.create({
            number: guid.raw().substring(0, 6),
            customer: req.body.customer,
            client: req.body.client,
            schedulingdate: req.body.schedulingdate,
            formPayment: req.body.formPayment,
            status: req.body.status,
            itens: req.body.items,
            subtotal: req.body.subtotal,
            
        });
        res.status(201).send({
            message: 'Agendamento cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.patch = async (req, res, next) => {
    var cleanFoo = {};
    for (var i in req.body) {
        if (req.body[i] !== null && req.body[i] !== "") {
        cleanFoo[i] = req.body[i];
        }
    }
    try{
        await repository.patch(req.body.id, cleanFoo);
            res.status(200).send({
                message: 'Cadastro atualizado com sucesso!'
        });
    } catch(e) {
        console.log(e.message);
        res.status(400).send({
            message: 'Falha ao processar sua requisição'
        });
    }       
};

exports.delete = async (req, res, next) => {
    repository.delete(req.body.id)
    .then(x=> {
        res.status(200).send({
            message: 'Agendamento removido com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao remover o agendamento',
            data: e
        });
    });
};