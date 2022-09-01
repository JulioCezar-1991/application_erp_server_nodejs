'use strict';

const mongoose = require('mongoose');
const Client = mongoose.model('Client');

exports.get = async () => {
    const res = await Client
        .find();
    return res;
}

exports.create = async (data) => {
    var client = new Client(data);
    await client.save();
};

exports.patch = async (id, data) => {
    await Client
        .findByIdAndUpdate(id, data,
            function (error, client) {
                console.log('Client update: ' + client);
            }, 
    );
};

exports.delete = async (id, data) => {
    return Client
        .findByIdAndDelete(id, data,
            function(error, client){
                console.log('Client deleted: ' + client);
    });
}