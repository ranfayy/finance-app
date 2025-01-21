const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

app.use(express.json());

const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));

connectDB();