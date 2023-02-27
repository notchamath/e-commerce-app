// import dependencies
const path = require("path");
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
app.use(express.json()); //parse json
app.use(express.urlencoded({extended: true})); //parse urlencoded payloads

// passport middleware
app.use(passport.initialize());

// passport config
require('./config/passport')(passport);

// backend routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/checkout-session', require('./routes/checkoutRoutes'));

// Serve frontend
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../client/build')));
    
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')));
} else {
    app.get('/', (req, res) => res.send('Not in Production'));
}

// error handler middleware
app.use(errorHandler);

// set PORT
app.listen(PORT, () => console.log('Listening on PORT ', PORT));