const UsersModel = require('../models/users')

exports.getUsers = async(req, res) => {
    try {
        const response = 'Get All Users'
        res.send(response)
    } catch (error) {
        console.log('error :>> ', error);
    }
}
