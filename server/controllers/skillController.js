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

module.exports = {
    loadSkills,
    postSkill
}
