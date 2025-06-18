const express = require('express');
const connectDB = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config(); // Load .env file

connectDB(); // Connect to MongoDB

const app = express();
const port = process.env.PORT || 5001;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes")); // ✅ Make sure this line exists

// Error handler middleware should come **after** routes
app.use(errorHandler);  

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
