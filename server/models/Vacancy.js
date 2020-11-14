const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('Vacancy', UserSchema);
