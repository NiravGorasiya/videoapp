const { DataTypes } = require('sequelize')
const logger = require('../../config/logger')

const TABLENAME = 'Users'

try {
    module.exports = {
        defineModel: async(sequelize) => {
            const Users = await sequelize.define(TABLENAME, {
                passportInfoId: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                status: {
                    type: DataTypes.ENUM(['Y', 'N', 'A']),
                    allowNull: true,
                    defaultValue: 'N'
                },
                passportNumber: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                leadId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                expiresOn: {
                    type: DataTypes.DATEONLY,
                    allowNull: true
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