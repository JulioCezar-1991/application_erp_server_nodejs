'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: [
            'Pintura das Unhas',
            'Pintura de Cabelo', 
            'Depilação',
            'Lavagem',
            'Corte'
            ],
    },
    price: {
        type: Number,
        required: true,
    },
    averagetime: {
        type: String,
        required: true,
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

module.exports = mongoose.model('Product', schema);