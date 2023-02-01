const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (error) {
        console.log('Error Connecting to MongoDB::: ', error);
        process.exit(1);
    }
}

module.exports = connectDB;