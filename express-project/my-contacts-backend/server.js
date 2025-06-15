const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

const port = process.env.PORT || 5000;

// Routes
app.use("/api/contacts", require("./routes/contactRoutes"));

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});