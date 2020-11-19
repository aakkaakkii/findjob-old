const {postSkill, loadSkills, deleteSkill} = require('../../controllers/skillController');
const router = require('express').Router();

router.route('/')
    .post(postSkill)
    .delete(deleteSkill)
    .get(loadSkills);

module.exports = router
