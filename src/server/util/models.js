const db = require('./database')
const {DataTypes} = require('sequelize')

module.exports = {

    User: db.define('users', {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        username: {
            type: DataTypes.STRING({length: 20}),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING({length: 300}),
            allowNull: false
        },
    }),

    Post: db.define('post', {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING({length: 40}),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING({length: 240}),
            allowNull: false
        },
        codeBlock: {
            type: DataTypes.STRING({length: 1500}),
            allowNull: false
        },
    }),

    Like: db.define('like', {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        like: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }),
}