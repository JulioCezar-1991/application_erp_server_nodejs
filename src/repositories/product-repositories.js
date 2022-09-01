'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.get = async () => {
    const res = await Product
    .find();
    return res;
}

exports.create = async (data) => {
    var product = new Product(data);
    await product.save();
};

exports.patch = async (id, data) => {
    await Product
        .findByIdAndUpdate(id, data,
            function (error, product) {
                console.log('Product update: ' + product);
            }, 
    );
};

exports.delete = async (id, data) => {
    return Product
        .findByIdAndDelete(id, data,
            function(error, product){
                console.log('Product deleted: ' + product);
    });
};