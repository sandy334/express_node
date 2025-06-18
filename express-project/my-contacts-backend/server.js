const express = require('express');
const connectDB = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config(); // Loads .env file

connectDB(); // Connect to MongoDB

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/contacts", require("./routes/contactRoutes"));
// Error handling middleware
app.use("/api/users", require("./routes/userRoutes")); // Example for user routes
app.use(errorHandler);  

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
