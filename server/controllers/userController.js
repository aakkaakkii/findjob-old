const mongoose = require('mongoose');
const User = mongoose.model('User');

const postUsers = (req, res, next) => {
    let user = new User();

    user.username = req.body.username;
    user.nickname = req.body.nickname;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    user.save().then(() => {
        return res.json({user: user.toProfileJSON()})
    }).catch(next);
}

const getUsers = (req, res, next) => {
    let query = {}
    let limit = 20;
    let offset = 0;

    if (typeof req.query.limit !== 'undefined') {
        limit = req.query.limit;
    }

    if (typeof req.query.offset !== 'undefined') {
        offset = req.query.offset;
    }

    User.find(query)
        .limit(Number(limit))
        .skip(Number(offset))
        .sort({createdAt: 'desc'})
        .exec().then((users) => {
        return res.json({users: users.map((u) => u.toProfileJSON())})
    });
}

const getUser = (req, res, next) => {
    User.findById(req.params.id).then((user) => {
        if (!user) {
            return res.sendStatus(401);
        }

        return res.json({user: user.toProfileJSON()});
    }).catch(next)
}

const putUser = (req, res, next) => {

}

const deleteUser = (req, res, next) => {
    User.findById(req.params.id).then((user) => {
        if (!user) {
            return res.sendStatus(401);
        }

        user.remove().then(() => {
            return res.sendStatus(204);
        });
    }).catch(next)
}

module.exports = {
    postUsers,
    getUsers,
    getUser,
    putUser,
    deleteUser
}
