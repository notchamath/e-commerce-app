const express = require("express");
const passport = require("passport");

const { stripeCheckout } = require('../controllers/checkoutController');

const router = express.Router();

const authMiddleware = passport.authenticate('jwt', {session: false});

// Route: /checkout-session/
router.route('/')
        .post(authMiddleware, stripeCheckout)
;

module.exports = router;