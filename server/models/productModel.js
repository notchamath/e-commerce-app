const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add product name'],
        unique: true
    },
    price: {
        type: String,
        required: [true, 'Please add product price']
    },
    category: {
        type: String,
        required: [true, 'Please add product category']
    },
    description: {
        type: String
    },
    image: {
        type: String,
        required: [true, 'Please add product image']
    },
});

module.exports = mongoose.model('Product', productSchema);