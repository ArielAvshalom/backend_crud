const Sequelize = require('sequelize')
const database = require('./database')

const Student = db.define('student', {
    //name, gender, dob, image
    firstname: {
        type: Sequelize.STRING,
        allowNull : false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.ENUM("M", "F", "O"),
        allowNull: false
    },
    dob: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT
    }
})