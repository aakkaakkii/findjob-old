const mongoose = require('mongoose');
const Skill = mongoose.model('Skill');

const loadSkills = (req, res, next) => {
    Skill.find({})
        .exec()
        .then((skills) => {
            return res.json({skills})
        });
}

const postSkill = (req, res, next) => {
    let Skill = new Skill();

    Skill.title = req.body.title;

    Skill.save().then(() => {
        return res.json({skill: Skill});
    }).catch(next);
}

const deleteSkill = (req, res, next) => {
    Skill.findById(req.params.id).then((skill) => {
        if (!skill) {
            return res.sendStatus(401);
        }

        skill.remove().then(() => {
            return res.sendStatus(204);
        });
    }).catch(next)
}


module.exports = {
    loadSkills,
    postSkill,
    deleteSkill
}
