const express = require('express');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();
connectDB();
const app=express();
const port = process.env.PORT||5000;

app.use("/api/contacts", require("./routes/contactRoutes"));
 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});