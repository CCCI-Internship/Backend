const Datatype = require('sequelize')
const sequelize = require('../utils/databse')

const Users = sequelize.define('users',{
    id: {
        type: Datatype.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
})