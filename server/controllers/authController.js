const passport = require('passport');

const login = (req, res, next) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err) {
            return next(err);
        }

        if(user) {
            user.token = user.generateJWT();
            return res.json({user: user.toAuthJSON()})
        } else {
            return res.status(422).json(info);
        }

    })(req, res, next);
}

module.exports = {
    login
}
