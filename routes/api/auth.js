const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');

// RETURN USERS DATA UPON SUCCESSFUL REQUEST THROUGH MIDDLEWARE TOKEN
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
});

module.exports = router;