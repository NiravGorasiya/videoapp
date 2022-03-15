const { findModelItemQ } = require("../queries/generic/index")
const sequelize = require("../models/sequelize/")
const bcrypt = require("bcrypt")
const { Op } = require("sequelize")
const { signJWT } = require("../utils/jwtutils");
const { UserNotFoundError } = require("../errors/")
const { comparePasswords } = require("../utils/passwordutility")

const userSignupCtrl = async (ctrlData) => {
    try {
        const user = await sequelize.models.Users.findOne({
            where: {
                [Op.or]: [{ email: ctrlData.email }, { username: ctrlData.username }]
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

const loginController = async (ctrlData) => {
    try {
        const user = await sequelize.models.Users.findOne({
            where: {
                email: ctrlData.email
            }
        })
        if (!user) {
            throw new Error('wrong credentials');
        } else {
            const result = await comparePasswords(ctrlData.password, user.password);
            if (result === true) {
                //generate jwt token
                const loginJwt = signJWT({ user: { userId: user.Id } });
                return { token: loginJwt, userdata: user };
            } else {
                throw new Error('wrong credentials');
            }
        }
    } catch (e) {
        throw e;
    }
};

module.exports = { userSignupCtrl, loginController }