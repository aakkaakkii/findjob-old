const {postCV, loadCVs, deleteCV, putCV} = require('../../controllers/userCVController');
const router = require('express').Router();

router.route('/')
    .post(postCV)
    .put(putCV)
    .delete(deleteCV)
    .get(loadCVs);

module.exports = router
