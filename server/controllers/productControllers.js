const asyncHandler = require('express-async-handler');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler( async (req, res) => {
    res.status(200).json({msg:'GET'})
});

// @desc    Add a new product
// @route   POST /api/products
// @access  Private
const addProducts = asyncHandler( async (req, res) => {
    
    if(!req.body.name || !req.body.price || !req.body.image){
        res.status(400);
        throw new Error('Fill out all product details such as product name, price and image');
    }
    res.status(200).json({msg:'ADD'})
});

// @desc    Update an existing product
// @route   PUT /api/products
// @access  Private
const updateProduct = asyncHandler( async (req, res) => {

    if(!req.body.name || !req.body.price || !req.body.image){
        res.status(400);
        throw new Error('Fill out all product details such as product name, price and image');
    }
    res.status(200).json({msg:'UPDATE'})
});

// @desc    Remove an existing product
// @route   DELETE /api/products
// @access  Private
const removeProducts = asyncHandler( async (req, res) => {

    if(!req.body.name || !req.body.price || !req.body.image){
        res.status(400);
        throw new Error('Fill out all product details such as product name, price and image');
    }
    res.status(200).json({msg:'REMOVE'})
});

module.exports = {
    getProducts,
    addProducts,
    updateProduct,
    removeProducts
}