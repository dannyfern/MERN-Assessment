const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatar = require ('gravatar');
const User = require('../../models/User');

//GET REQUEST JUST INCASE
router.get('/', (req, res) => res.send('User route'));


//POST REQUEST AND EXPRESS VALIDATION.

router.post('/', 
    [
    check('name', 'Name is a required field').not().isEmpty(),
    check('email', 'Email is a required field').isEmail(),
    check('password', 'A minimum of 6 characters is required!').isLength ({ min: 6})
    ], 

    async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

// CONST REQ.BODY PARAMETERS FOR POST REQUEST
    
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if(user) {
            res.status(400).json({ errors: [ { msg: 'User already exists' }]});
        }

        // GRAVATAR TO GET USER AVATAR FROM SIGN UP EMAIL
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm',
        });

        // USER SCHEMA INSTANCE FOR REQUIRED PARAMETERS AND PLUGINS
        user = new User({
            name,
            email,
            avatar,
            password
        });

        // HASHING THE PASSWORD WITH BCRYPT
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // SAVE THE USER TO THE DB
        await user.save();

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