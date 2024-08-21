const express = require('express');
const users = require('./users');

const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
    console.log('Recieved login request:', req.body);
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
