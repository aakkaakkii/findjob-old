const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
// const errorhandler = require('errorhandler');
const mongoose = require('mongoose');

const isProduction = process.env.NODE_ENV === 'production';

const app =express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

if(isProduction){
    mongoose.connect(process.env.MONGODB_URI);
} else {
    // mongoose.connect('mongodb://root:root@localhost:27017/findjob',  { useNewUrlParser: true } );
    mongoose.connect('mongodb://localhost:27017/findjob', { auth:{authdb:"admin"}, user:'root' , pass:'root', useCreateIndex: true});
    mongoose.set('debug', true);
}

require('./models/User');
require('./models/Vacancy');
require('./models/UserCV');
require('./models/Skill');
require('./config/passport');

app.use(require('./routes'));

/// 404 error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

const server = app.listen( process.env.PORT || 3000, () => {
    console.log( `Listening on port  ${server.address().port}`);
});
