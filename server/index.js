// import dependencies
const express = require("express");
const dotenv = require("dotenv").config();
const passport = require("passport");
// import modules
const errorHandler = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

// get PORT from enviroment variable
const PORT = process.env.PORT || 5000;

// connect to database
connectDB();

// express config
const app = express();
app.use(express.urlencoded({extended: true})); //parse urlencoded payloads

// passport middleware
app.use(passport.initialize());

// passport config
require('./config/passport')(passport);

// routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

// error handler middleware
app.use(errorHandler);

// set PORT
app.listen(PORT, () => console.log('Listening on PORT ', PORT));