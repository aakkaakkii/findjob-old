const {postVacancy, putVacancy, loadVacancies, deleteVacancy} = require('../../controllers/vacancyController');
const router = require('express').Router();

router.route('/')
    .post(postVacancy)
    .put(putVacancy)
    .delete(deleteVacancy)
    .get(loadVacancies);

module.exports = router
