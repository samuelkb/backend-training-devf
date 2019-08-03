const actions = require('../actions');
const { authUserById } = require('../utils');

const signup = (_, { data }) => {
    if(data.profile_img){
        {createReadStream} = await data.profile_img;
    }
    return actions.signup(data)
                  .then( res => res)
                  .catch( err => err );
};

const login = (_, {email, password}) => {
    return actions.login(email, password)
                  .then(res => res)
                  .catch(err => err);
};

const createUser = async (_, { data }, context) => {
    const user = await authUserById(context);
    if (!user) throw new Error("No estás autenticado");
    return actions.createUser(data)
                .then(newUser => newUser)
                .catch(err => err);
};

module.exports = {
    signup,
    login,
    createUser,
}