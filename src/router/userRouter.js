const router = require("express").Router();
const expressValidatorMw = require("../middlewares/validate");
const { registerv } = require("../validators/registerv")
const { matchedData } = require("express-validator")
const {userSignupCtrl,loginController}=require("../controller/userController")

router.post("/signup",registerv, expressValidatorMw, async (req, res, next) => {
    try {
        const ctrlData = matchedData(req, { locations: ["body"] });       
        const user =await userSignupCtrl(ctrlData)
        return res.status(201).json({status:"success",message:"user create successfull",data:user})
    } catch (error) {
        return next(error);
    }
});

router.post("/login",async (req, res, next) => {
    const { email, password,username } = req.body
    try {
        const { token, user } = await loginController({ email, password ,username})
        if (token) {
            res.send({ token })
        }
    } catch (e) {
        return next(e)
    }
});

module.exports = router