const { DataTypes } = require('sequelize')
const logger = require('../../config/logger')

const TABLENAME = 'Users'

try {
    module.exports = {
        defineModel: async(sequelize) => {
            const Users = await sequelize.define(TABLENAME, {
                Id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                fullname: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                username: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            }, {
                tableName: TABLENAME
            })

            Users.references = async(models, sequelize) => {
                const queryInterface = sequelize.getQueryInterface()
            }

            Users.associate = async(models, sequelize) => {    
            }
            return Users
        },
        associations: async(sequelize) => {},
        insertFixedData: async(sequelize) => { //idempotent
        }
    }
} catch (e) {
    logger.error(e)
}