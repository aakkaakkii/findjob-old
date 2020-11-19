const mongoose = require('mongoose');
const UserCV = mongoose.model('UserCV');

const loadCVs = (req, res, next) => {
    UserCV.find({})
        .exec()
        .then((cvs) => {
            return res.json({cvs})
        });
}

const postCV = (req, res, next) => {
    let UserCV = new UserCV();

    UserCV.description = req.body.description;
    UserCV.mainSkills = req.body.mainSkills;
    UserCV.skills = req.body.skills;
    UserCV.user = req.body.userId;

    UserCV.save().then(() => {
        return res.json({userCV: UserCV});
    }).catch(next);
}

const putCV = (req, res, next) => {

}


const deleteCV = (req, res, next) => {
    UserCV.findById(req.params.id).then((cv) => {
        if (!cv) {
            return res.sendStatus(401);
        }

        cv.remove().then(() => {
            return res.sendStatus(204);
        });
    }).catch(next)
}


module.exports = {
    loadCVs,
    postCV,
    putCV,
    deleteCV
}
