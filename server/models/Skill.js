const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title: {type: String},
});

mongoose.model('Skill', Schema);
