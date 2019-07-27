const jwt = require('jsonwebtoken');
const User = require('../models/User');

const signup = (email, password) => {

    const newUser = new User({
        email,
        password,
    });

    let payload = {
        email: null,
        password: null,
    };

    return newUser.save()
            .then(user => {
                return new Promise((resolve, reject) => {
                    jwt.sign({email: user.email, password: user.password}, 'paqkieresabereso', (err, token) => {
                        err
                        ? reject({message: "Hubo un error...", token: err })
                        : resolve({message: "Token generado", token});
                    });
                });                
            })
            .catch(err => {
                return Promise.reject({message: 'Error', token: err})
            });
}

module.exports = {
    signup,
}