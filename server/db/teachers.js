const Sequelize = require('sequelize')
const db = require('./database')

const Teacher = db.define('teacher', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT
    }
})

module.exports = Teacher