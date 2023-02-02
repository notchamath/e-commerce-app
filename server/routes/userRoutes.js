const express = require("express");
const {registerUser, loginUser} = require('../controllers/userControllers');

const router = express.Router();

// Route: /api/user
router.post('/', registerUser);
router.post('/login', loginUser);

module.exports = router;