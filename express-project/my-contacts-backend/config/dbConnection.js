const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected:",
            connect.connection.host,
            connect.connection.name);
        
    } catch (error) {
        console.log(error); // Corrected variable name
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
