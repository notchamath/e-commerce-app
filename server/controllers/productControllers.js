const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler( async (req, res) => {

    // get products from db
    const products = await Product.find();

    // response
    res.status(200).json(products);
});

// @desc    Add a new product
// @route   POST /api/products
// @access  Private
const addProducts = asyncHandler( async (req, res) => {

    const {name, price, category, image} = req.body;

    // check for empty fields
    if(!name || !price || !category || !image){
        res.status(400);
        throw new Error('Fill out all product details such as product name, price, category and image');
    }

    // check if product is unique
    const uniqueName = name.toLowerCase();
    const productAlreadyExists = await Product.findOne({name: uniqueName});
    if(productAlreadyExists){
        res.status(400);
        throw new Error('This product already exists');
    }


    // create product in db
    const product = await Product.create({
        name: uniqueName,
        price: price,
        category: category,
        image: image
    });

    // response
    res.status(200).json(product)
});

// @desc    Update an existing product
// @route   PUT /api/products
// @access  Private
const updateProduct = asyncHandler( async (req, res) => {

    const productId = req.body.id;
    const product = await Product.findById(productId);

    // check if product exists in db
    if(!product){
        res.status(400);
        throw new Error('Product with that ID was not found');
    }

    // check for empty fields
    if(!req.body.name || !req.body.price || !req.body.category || !req.body.image){
        res.status(400);
        throw new Error('Fill out all product details such as product name, price, category and image');
    }

    // isolate fields needed for the product to be updated
    const updateProduct = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,
    }

    // update the product in db
    const updatedProduct = await Product.findByIdAndUpdate(productId, updateProduct, {new: true});

    // response
    res.status(200).json(updatedProduct);
});

// @desc    Remove an existing product
// @route   DELETE /api/products
// @access  Private
const removeProducts = asyncHandler( async (req, res) => {
    const productId = req.body.id;
    const product = await Product.findById(productId);

    // check if product exists in db
    if(!product){
        res.status(400);
        throw new Error('Product with that ID was not found');
    }

    // remove product from db
    const removedProduct = await Product.findByIdAndDelete(productId);
    
    // response
    res.status(200).json(removedProduct);
});

module.exports = {
    getProducts,
    addProducts,
    updateProduct,
    removeProducts
}