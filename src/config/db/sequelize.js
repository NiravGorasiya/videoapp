const Sequelize = require('sequelize')
const logger = require('../logger')

const sequelize = new Sequelize.Sequelize({
    dialect: 'mysql',
    host: process.env.SQL_HOST,
    database: process.env.SQL_DATABASE,
    password: process.env.SQL_PASSWORD,
    username: process.env.SQL_USERNAME,
    logging: process.env.SEQUELIZE_LOGGING == "true" ? true : false,
    port: process.env.SQL_PORT || 3306
})


sequelize.authenticate().then(async() => {
    logger.info('Authentication Successful ')
}).catch((error) => {
    logger.log('Error: ', error)
})

module.exports = sequelize