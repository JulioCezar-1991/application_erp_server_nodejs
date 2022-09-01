'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true,
    },
    cpf: {
        type: String,
        unique: true
    },
    date: {
        type: String,
    },
    telcel: {
        type: String,
        required: true,
        trim: true,
    },
    telfix: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    cep: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    sector: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
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

module.exports = mongoose.model('Client', schema);