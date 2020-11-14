const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/skills', require('./skill'));
router.use('/cvs', require('./userCV'));
router.use('/vacancies', require('./vacancy'));
router.use('/auth', require('./auth'));


module.exports = router;
