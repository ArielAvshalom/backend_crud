const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const db = new Sequelize(
    process.env.DATABASE_url || `postgres://localhost:5432/{$pkg.name}`,
    {
        logging : false
    }
)

module.exports = dbpost