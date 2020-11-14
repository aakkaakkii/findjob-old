const {login} = require('../../controllers/authController');
const router = require('express').Router();

router.route('/login').get(login);

module.exports = router;
