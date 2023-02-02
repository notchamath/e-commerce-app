const express = require("express");
const passport = require("passport");

const { 
    getProducts,
    addProducts,
    updateProduct,
    removeProducts
 } = require('../controllers/productControllers');

const router = express.Router();

// Route: /api/products
router.route('/')
        .get(getProducts)
        .post(passport.authenticate('jwt', {session: false}), addProducts)
        .put(passport.authenticate('jwt', {session: false}), updateProduct)
        .delete(passport.authenticate('jwt', {session: false}), removeProducts)
;

module.exports = router;