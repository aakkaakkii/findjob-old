const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {type: String},
    nameEN: {type: String}
});

mongoose.model('Location', Schema);
