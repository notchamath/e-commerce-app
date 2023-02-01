const express = require("express");
const { 
    getProducts,
    addProducts,
    updateProduct,
    removeProducts
 } = require('../controllers/productControllers');

const router = express.Router();

// Route: /api/products/
router.route('/')
        .get(getProducts)
        .post(addProducts)
        .put(updateProduct)
        .delete(removeProducts)
;

module.exports = router;