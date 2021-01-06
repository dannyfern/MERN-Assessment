const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// POST ROUTE TO ADD A POST -----------------------
router.post('/', [auth, 
    [
    check('title', 'Title is required')
        .not()
        .isEmpty(),
    check('catagory', 'Catagory is required')
        .not()
        .isEmpty(),
    check('text', 'Text is required')
        .not()
        .isEmpty()   
    ]
], 
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400). json({ errors: errors.array() });
    }
// REQUIRE SCHEMA FOR NEW POST ------------------------------------
    try {
        const user = await (await User.findById(req.user.id)).isSelected('-password');

        const newPost = new Post ({
            text: req.body.text,
            title: req.body.title,
            catagory: req.body.catagory,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id,
        });

        const post = await newPost.save();
        res.json(post);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}
);

// GET REQUEST TO GET ALL POSTS IN THE DB ----------------------------

router.get('/', auth, async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

//GET POST BY ID --------------------------------------------


router.get('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) {
            return res.status(404).json({ msg: 'Post doesnt exist' }).redirect('/');
        }

        res.json(post);
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post doesnt exist' }).redirect('/');
        }
        res.status(500).send('Server error');
    }
});

// DELETE ROUTE FOR POSTS -------------------------------------

router.delete('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        // POST DOESNT EXISTS RE DIRECT
        if(!post) {
            return res.status(404).json({ msg: 'Post doesnt exist' }).redirect('/');
        }

        // Check user is the same as post owner
        if(post.user.toString() !== req.user.id) {
            return res.status(401, 'You are doing some Illegal and your IP has been logged')
        }

        await post.remove();

        res.json({ msg: 'post removed'});
    } catch (err) {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post doesnt exist' }).redirect('/');
        }
        res.status(500).send('Server error');
    }
});

//LIKE A POST WITH A USER ID ------------------------------------

router.put('/like/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
    
        if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.json(400).json({ msg: 'Post already liked '});
            }

        post.likes.unshift({
            user: req.user.id
        });

        await post.save();

        res.json(post.likes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;