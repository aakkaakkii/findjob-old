const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    title: {type: String},
});

mongoose.model('Skill', UserSchema);
