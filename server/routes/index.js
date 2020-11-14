const {adminBroRouter, adminBro} = require('./adminBros')
const router = require('express').Router();

router.use('/', require('./api'));
router.use(adminBro.options.rootPath, adminBroRouter)

module.exports = router;
