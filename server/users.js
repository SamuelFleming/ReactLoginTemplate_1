const express = require('express');
const router = express.Router();

const users = [
    { id: 1, username: 'admin', password: 'adminpass' },
    { id: 2, username: 'user1', password: 'pass1' },
    { id: 3, username: 'user2', password: 'pass2' },
    { id: 4, username: 'user3', password: 'pass3' },
    { id: 5, username: 'user4', password: 'pass4' },
    { id: 6, username: 'user5', password: 'pass5' }
];

router.post('/login', (req, res) => {
    console.log('Received login request:', req.body);
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);

    if (user) {
        if (user.password === password) {
            res.json({ success: true, user: { username: user.username } });
        } else {
            res.json({ success: false, message: 'Incorrect password.' });
        }
    } else {
        res.json({ success: false, message: 'Username not found.' });
    }
});

module.exports = router;