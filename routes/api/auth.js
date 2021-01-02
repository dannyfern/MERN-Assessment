const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


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

router.post('/', 
    [
    check('email', 'Email is a required field').isEmail(),
    check('password', 'Password required for this route').exists()
    ], 

    async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

// CONST REQ.BODY PARAMETERS FOR POST REQUEST
    
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if(!user) {
           return res.status(400).json({ errors: [ { msg: 'Invalid User' }]});
        }


        const compares = await bcrypt.compare(password, user.password);

        if(!compares) {
            return res.status(400).json({ errors: [ { msg: 'Invalid User' }]});
        }

        //JSON WEB TOKEN FROM USER ID
        const send = {
            user: {
                id: user.id
            }
        }

        jwt.sign(send, config.get('jwtsign'),
                { expiresIn: 560000},
                (err, token) => {
                    if(err) throw err;
                    res.json({ token })
                });
        
        // CATCHING ANY ERRORS ABOVE AND SENDING A SERVER ERROR IN SAVING TO THE DB
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Opps, something went wrong with saving your profile :(...');
    }

});

module.exports = router;
