'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async () => {
    const res = await Customer
    .find();
    return res;
}

exports.create = async (data) => {
    var customer = new Customer(data);
    await customer.save();
};

exports.authenticate = async(data) => {
    const res = await Customer.findOne({
        email: data.email,
        password: data.password
    });
    return res;
};

exports.patch = async (id, data) => {
    await Customer
        .findByIdAndUpdate(id, data,
            function (error, customer){
                console.log('Customer update ' + customer);
            }
        );
};



exports.delete = async (id, data) => {
    return Customer
        .findByIdAndDelete(id, data,
            function (error, customer){
                console.log('Customer deleted: ' + customer);
        }
    );
};