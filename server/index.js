const express = require('express');
const users = require('./users');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', users);  // Use the users router for handling routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
