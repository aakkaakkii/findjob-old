const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;

const Schema = new mongoose.Schema({
    username: {type: String, unique: true, index: true},
    nickname: {type: String},
    email: {type: String, unique: true, match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    type: {
        type: String,
        enum: ['PERSON', 'ORGANISATION']
    },
    password: String,
    salt: String
});

Schema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

Schema.methods.toProfileJSON = function () {
    return {
        username: this.username,
        email: this.email,
    };
};

Schema.methods.generateJWT = function () {
    let today = new Date();
    let exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, secret);
};

Schema.methods.toAuthJSON = function () {
    return {
        username: this.username,
        email: this.email,
        token: this.generateJWT(),
    };
};

mongoose.model('User', Schema);
