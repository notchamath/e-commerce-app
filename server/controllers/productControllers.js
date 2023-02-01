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
    res.status(200).json({msg:'ADD'})
});

// @desc    Update an existing product
// @route   PUT /api/products
// @access  Private
const updateProduct = asyncHandler( async (req, res) => {
    res.status(200).json({msg:'UPDATE'})
});

// @desc    Remove an existing product
// @route   DELETE /api/products
// @access  Private
const removeProducts = asyncHandler( async (req, res) => {
    res.status(200).json({msg:'REMOVE'})
});

module.exports = {
    getProducts,
    addProducts,
    updateProduct,
    removeProducts
}