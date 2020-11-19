const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    location: {type: mongoose.Schema.Types.ObjectId, ref: 'Location'},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    mainSkills: [
        {
            skill: {type: mongoose.Schema.Types.ObjectId, ref: "Skill"},
            rating: {type: Number, min: 0, max: 10}
        }
    ],
    skills: [
        {type: mongoose.Schema.Types.ObjectId, ref: "Skill"}
    ],
});

mongoose.model('Vacancy', Schema);
