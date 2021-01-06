const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    name: { type: String, 
            required: true, 
            unique: false },

    email: { 
            type: String, 
            required: true,
            unique: true, 
            uniqueCaseInsensitive: true },
    
    password: { type: String, 
                required: true, 
                unique: false},

    avatar: { type: String },
     
    date: { type: Date, defauult: Date.now },
});

userSchema.plugin(uniqueValidator);

module.exports = User = mongoose.model('user', userSchema);