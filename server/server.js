// import dependencies
const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require('./middleware/errorMiddleware');

// get PORT from enviroment variable
const PORT = process.env.PORT || 5000;

// express config
const app = express();
app.use(express.urlencoded({extended: true})); //parse urlencoded payloads

// routes
app.use('/api/products', require('./routes/productRoutes'));

// error handler middleware
app.use(errorHandler);

// set PORT
app.listen(PORT, () => console.log('Listening on PORT ', PORT));