const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('config');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { Router } = require('express');

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', 
        ['name', 'avatar']);
        
        if(!profile) {
            return res.status(404).json({ msg: '404 That user could not be found' });
        }

        res.json(profile);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Sorry there was a server error');
    }
});

router.post('/', [auth, 
    [check('userprofile', 'Profile form is required for signup')
        .notEmpty(),
    check('skills', 'Please provide your skillset on the signup to be successfully registered')
        .notEmpty(),
    ]
],
    async function (req, res) {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {
            name,
            username,
            dateofbirth,
            location,
            bio,
            blogpostdescription,
            interests,
            languages,
            experiencelevel,
            yearsofexperience,
        } = req.body;

        // Requiring profile fields so that they can be initialized ------------------------
        const profileFields = {};
        profileFields.user = req.user.id;
        if(name) profileFields.name = name;
        if(username) profileFields.username = username;
        if(dateofbirth) profileFields.dateofbirth = dateofbirth;
        if(location) profileFields.location = location;
        if(bio) profileFields.bio = bio;
        if(blogpostdescription) profileFields.blogpostdescription = blogpostdescription;
        if(interests) profileFields.interests = interests;
        if(interests) {
            profileFields.interests = interests.split(',').map(interests => interests.trim());
        };
        // Skills fields to be initialized ---------------------------------------------
        profileFields.skills = {};
        if(languages) profileFields.skills.languages = languages;
        if(experiencelevel) profileFields.skills.experiencelevel = experiencelevel;
        if(yearsofexperience) profileFields.skills.yearsofexperience = yearsofexperience;
        if(languages) {
            profileFields.languages = languages.split(',').map(languages => languages.trim());
        };

        // FIND THE PROFILE BU USER ID AND UPDATE IT BASED ON USER INPUT ----------------
        try {
            let profile = await Profile.findOne({ user: req.user.id });

            if(profile) {
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id }, 
                    { $set: profileFields },
                    { new: true }
                    );

                    return res.json(profile);
            }
            // CREATE THE PROFILE -------------------------------------------------
            profile = new Profile(profileFields);
            
            await profile.save();
            
            res.json(profile);
            
            } catch(err) {
            console.error(err.message);
            res.status(500).send('Error from Server');
            }
    }
);
//   ROUTE TO GET ALL PROFILES ------------------------------------------------
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error from server');
    }
});

// ROUTE TO GET ALL PROFILES ---- BY USER ID ---------------------------------------------
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id })
        .populate('user', ['name', 'avatar']);
        if(!profile) return res.status(400).json({ msg: 'No profile for this user!' })
        res.json(profile)
    } catch (err) {
        console.error(err.message);
        if(err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile does not exist!' })
        }
        res.status(500).send('Error from server');
    }
});

// ROUTE TO DELETE A PROFILE AND USER ----------------------------------------------------

router.delete('/', auth, async (req, res) => {
    try {
        await Profile.findOneAndRemove({ user: req.user.id });
        await User.findOneAndRemove({ _id: req.user.id });
        res.json({ msg: 'User deleted' })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error from server');
    }
});

// SCHEMA FOR THE EXPERIENCE OF THE USER api/profile/experience ------------------------------------------------------
router.put('/experience', 
    [auth, 
    [
        check('title', 'Title is a required field')
        .not().isEmpty(),
        check('company', 'Company is a required field')
        .not().isEmpty()
    ] 
],
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

const {
    jobtitle,
    business,
    location,
    title,
    company,
    startdate,
    enddate
} = req.body;

const currentExp = {
    jobtitle,
    business,
    location,
}
const pastExp = {
    title,
    company,
    startdate,
    enddate,
}
// DELETE EXPERIENCE BY ID ---------------------------------------------------
try {
    const profile = await Profile.findOne({ user: req.user.id });

    profile.currentroles.unshift(currentExp);
    profile.pastroles.unshift(pastExp)

    await profile.save();

    res.json(profile);
} catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
}
});

// DELETE EXPERIENCE ROUTE ----------------------------------------
router.delete('/experience/:exp_id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });

        const removeCurrent = profile.currentroles
        .map(item => item.id)
        .indexOf(req.params.exp_id);

        const removePast = profile.pastroles
        .map(item => item.id)
        .indexOf(req.params.exp_id);

        profile.currentroles.splice(removeCurrent, 1);
        profile.pastroles.splice(removePast, 1);
        await profile.save();

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// EDUCATION FOR PROFILE --------------------------------

router.put('/education', 
    [auth, 
    [
        check('institution', 'Institution is a required field')
        .not().isEmpty(),
        check('degree', 'Degree is a required field')
        .not().isEmpty()
    ] 
],
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

const {
    institution,
    degree,
    startdate,
    enddate,
} = req.body;

const newEdu = {
    institution,
    degree,
    startdate,
    enddate,
}
// DELETE QUALIFICATIONS BY ID ----------------------------------------
try {
    const profile = await Profile.findOne({ user: req.user.id });

    profile.qualifications.unshift(newEdu);

    await profile.save();

    res.json(profile);
} catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
}
});

// DELETE QUALIFICATIONS BASED ON ID -------------------------------------
router.delete('/education/:edu_id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });

        const removeEdu = profile.qualifications
        .map(item => item.id)
        .indexOf(req.params.edu_id);

        profile.qualifications.splice(removeEdu, 1);
        
        await profile.save();

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// ---------------------- SOCIALS ROUTE --------------------------------------
router.put('/socials', 
    [auth, 
    [
        check('linkedin', 'linkedin is a required field')
        .not().isEmpty(),
    ] 
],
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

const {
    linkedin,
    twitter,
    instagram,
    facebook,
} = req.body;

const newSoc = {
    linkedin,
    twitter,
    instagram,
    facebook,
};

try {
    const profile = await Profile.findOne({ user: req.user.id });

    profile.socials.unshift(newSoc);

    await profile.save();

    res.json(profile);
} catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
}
});

router.delete('/socials/:soc_id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });

        const removeSoc = profile.socials
        .map(item => item.id)
        .indexOf(req.params.soc_id);

        profile.socials.splice(removeSoc, 1);
        
        await profile.save();

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// ------------------------- GET GITHUB PROFILE FROM URI ----------------------------

// router.get('/github/:username', (req, res) => {
//     try {
//         const options = {
//             uri: `https://api.github.com/users/
//             ${req.params.username}/repos?per_page=5&
//             sort=created:asc&client_id=${config.get('githubClientId')}
//             &client_secret=${config.get('githubSecret')}`,
//             method: 'GET',
//             headers: { 'user-agent': 'node.js' }
//         };

//         request(options, (error, response, body) => {
//             if (error) console.error(error);
            
//             if(response.statusCode !==200) {
//                 return res.status(404).send("no profile");
//                 }

//             res.json(JSON.parse(body));
//         });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });
module.exports = router;
