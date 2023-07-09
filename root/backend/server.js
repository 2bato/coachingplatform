const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const exercises = require('./routes/api/exercises');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/exercises', exercises);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));