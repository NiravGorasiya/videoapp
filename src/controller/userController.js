const { findModelItemQ } = require("../queries/generic/index")
const sequelize = require("../models/sequelize/")
const bcrypt = require("bcrypt")
const {Op} =require("sequelize")
const userSignupCtrl = async (ctrlData) => {
    try {
        const user = await sequelize.models.Users.findOne({ 
            where:{
                [Op.or]: [{email: ctrlData.email },{username: ctrlData.username}]
            }
        })
        if (user) {
            throw new Error('Email or username already exists');
        } else {
            const hashed = await bcrypt.hash(ctrlData.password, 8);
            const register = await sequelize.models.Users.create({
                email: ctrlData.email,
                password: hashed,
                fullname: ctrlData.fullname,
                username: ctrlData.username,
            });
            const result = await register.save();
            return result;
        }
    } catch (error) {
        throw error
    }
};

const loginController = async ({ email, password,username }, next) => {
    try {
        const user = await sequelize.models.Users.findOne({ 
            where:{
                [Op.or]: [{email: ctrlData.email },{username: ctrlData.username}]
            }
        })
        if (user) {
            throw new Error('Email or username already exists');
        }
    } catch (e) {
        throw e;
    }
};

module.exports = { userSignupCtrl, loginController }