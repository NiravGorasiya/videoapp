const router = require("express").Router();
const expressValidatorMw = require("../middlewares/validate");
const { registerv } = require("../validators/registerv")
const { matchedData } = require("express-validator")
const {userSignupCtrl}=require("../controller/userController")

router.post("/signup",registerv, expressValidatorMw, async (req, res, next) => {
    try {
        const ctrlData = matchedData(req, { locations: ["body"] });       
        const user =await userSignupCtrl(ctrlData)
        return res.status(201).json({status:"success",message:"user create successfull",data:user})
    } catch (error) {
        return next(error);
    }
});

module.exports = router