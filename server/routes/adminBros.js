const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const adminBroResources = require('../middleware/AdminBroAdapter')

const adminBro = new AdminBro({
    // databases: [],
    resources: adminBroResources,
    rootPath: '/admin',
})

const router = AdminBroExpress.buildRouter(adminBro);

module.exports = {
    adminBroRouter: router,
    adminBro
};
