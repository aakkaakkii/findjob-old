const {postUsers, getUsers, getUser, deleteUser, putUser} = require('../../controllers/userController');
const router = require('express').Router();

router.route('/')
    .post(postUsers)
    .get(getUsers);

router.route('/:id')
    .get(getUser)
    .put(putUser)
    .delete(deleteUser);

module.exports = router
