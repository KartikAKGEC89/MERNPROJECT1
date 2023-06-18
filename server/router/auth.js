const express = require('express');

// Route define so make app.js code more read able *******

const router = express.Router();

router.get('/', (req, res) => {
    res.send('router hello');
});

router.post('/register', (req, res) => {
    console.log(req.body);
    res.json({ message: req.body });
});

module.exports = router;