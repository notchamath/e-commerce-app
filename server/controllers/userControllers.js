const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// generate jwt
const generateJwt = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '15m'
    });
}

// @desc    Register new user
// @route   POST /api/user
// @access  Public
const registerUser = asyncHandler( async (req, res) => {
    const {name, email, password} = req.body;

    // check if all data provided
    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please fill all required fields');
    }

    // check if email is unique
    const userAlreadyExists = await User.findOne({email});
    if(userAlreadyExists){
        res.status(400);
        throw new Error('An account is already registered with this email!');
    }

    // hash password
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const newUser = await User.create({
        username: name,
        email: email,
        password: hashedPassword
    });

    // create token
    const token = generateJwt(newUser.id);

    // response
    if(newUser) {
        res.status(201).json({
            id: newUser.id,
            name: newUser.username,
            token: 'Bearer ' + token
        });
    } else {
        res.status(400);
        throw new Error('Error Registering User');
    }
});


// @desc    Authenticate user
// @route   POST /api/user/login
// @access  Public
const loginUser = asyncHandler( async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    // check for email and password and compare with db
    if(user && (await bcrypt.compare(password, user.password))){

        // create token
        const token = generateJwt(user.id);

        // response
        res.status(200).json({
            id: user.id,
            name: user.username,
            token: 'Bearer ' + token
        });

    } else {
        res.status(400);
        throw new Error('Invalid Email or Password');
    }
});

module.exports = {registerUser, loginUser}