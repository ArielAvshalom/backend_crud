const Sequelize = require('sequelize')
const db = require('./database')

const Subject = db.define('subject', {
    subjectName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT
    }
})

module.exports = Subject