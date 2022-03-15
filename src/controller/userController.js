const {findModelItemQ}=require("../queries/generic/index")
const sequelize=require("../models/sequelize/")
const bcrypt =require("bcrypt")

const userSignupCtrl = async (ctrlData) => {
    try {
        const hashed = await bcrypt.hash(ctrlData.password, 8);
        const user = await sequelize.models.Users.findOne({email:ctrlData.email})
        if (user) {
            throw new Error('Email already exists');
        } else {
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


module.exports = { userSignupCtrl }