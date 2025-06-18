const express = require('express');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');

connectDB();
const app = express();

app.use(express.json());

app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
