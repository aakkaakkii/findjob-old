const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose');
const crypto = require('crypto');
const mongoose = require('mongoose');

const User = mongoose.model('User');
const Vacancy = mongoose.model('Vacancy');
const UserCV = mongoose.model('UserCV');
const Skill = mongoose.model('Skill');
const Category = mongoose.model('Category');
const Location = mongoose.model('Location');

AdminBro.registerAdapter(AdminBroMongoose)

const resources = [
    {
        resource: User,
        options: {
            properties: {
                password: {isVisible: {list: false, filter: false, show: false, edit: true}},
                salt: {isVisible: false},
            },
            actions: {
                new: {
                    before: async (request) => {
                        let salt = crypto.randomBytes(16).toString('hex');
                        let password = crypto.pbkdf2Sync(request.payload.password, salt, 10000, 512, 'sha512').toString('hex');

                        request.payload = {
                            ...request.payload, password, salt
                        }

                        return request;
                    }
                }
            }
        }
    },
    {resource: Vacancy},
    {resource: UserCV},
    {resource: Skill},
    {resource: Category},
    {resource: Location},
];

module.exports = resources;
