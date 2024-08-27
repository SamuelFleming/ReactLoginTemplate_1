/*


const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = [
    { id: 1, username: 'admin', password: await bcrypt.hash('adminpass', 10) },
    { id: 2, username: 'user1', password: await bcrypt.hash('pass1', 10) }
    // Add more users here...
];


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Received login request:', { username, password });
    
    const user = users.find(u => u.username === username);
    if (!user) {
        console.log('Username not found');
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    try {
        console.log('User found, comparing passwords...');
        //const isMatch = await bcrypt.compare(password, user.password);
        const isMatch = (password === user.password);
        console.log('Password comparison result:', isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
        console.log('Login successful, sending token');
        res.json({ token });

    } catch (error) {
        console.error('Error during password comparison:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;


*/