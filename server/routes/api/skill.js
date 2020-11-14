const {postSkill, loadSkills} = require('../../controllers/skillController');
const router = require('express').Router();

router.route('/')
    .post(postSkill)
    .get(loadSkills);

module.exports = router
