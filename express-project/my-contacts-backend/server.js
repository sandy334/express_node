const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

const port = process.env.PORT || 5000;

// Routes
app.use("/api/contacts", require("./routes/contactRoutes"));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});