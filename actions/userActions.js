const User = require('../models/User');

const createUser = (user) => {
    return new User(user).save();

};

module.exports = {
    createUser,
}