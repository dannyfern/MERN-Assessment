const express = require('express');
const router = express.Router();

//GET REQUEST JUST INCASE
router.get('/', (req, res) => res.send('User route'));
//POST REQUEST

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('User route');
});






module.exports = router;