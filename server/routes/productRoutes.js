const express = require("express");
const passport = require("passport");

const { 
    getProducts,
    addProducts,
    updateProduct,
    removeProducts
 } = require('../controllers/productControllers');

const router = express.Router();

const authMiddleware = passport.authenticate('jwt', {session: false});

// Route: /api/products
router.route('/')
        .get(getProducts)
        .post(authMiddleware, addProducts)
        .put(authMiddleware, updateProduct)
        .delete(authMiddleware, removeProducts)
;

module.exports = router;