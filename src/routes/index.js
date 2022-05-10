const express = require('express');
const router = express.Router();

// Middlewares
// implement

// Routes
// implement

// Registering Middlewares
// implement

// Registering routes
// implement
router.get('/', async function getRules(req, res) {
    try {
        return res.send({ success: 'You are all set to begin!' });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: err.message });
    }
});


router.get('/users', async function getRules(req, res) {
    try {
        return res.send({ success: 'You are all set to begin!' });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: err.message });
    }
});


module.exports = router;
