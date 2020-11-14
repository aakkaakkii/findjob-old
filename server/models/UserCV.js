const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    description: {type: String},
    mainSkills: [
        {
            skill: {type: mongoose.Schema.Types.ObjectId, ref: "Skill"},
            rating: {type: Number, min: 0, max: 10}
        }
    ],
    skills: [
        {type: mongoose.Schema.Types.ObjectId, ref: "Skill"}
    ],
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('UserCV', UserSchema);
