'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    telcel: {
        type: String,
        required: true
    },
    telfix: {
        type: String,
        
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        required: true,
        enum: ['Administrador', 'Usuário'],
        default: 'Usuário'
    }],
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
    createDate:{
        type: Date,
        default: Date.now,
        require: true
    }
});

module.exports = mongoose.model('Customer', schema);