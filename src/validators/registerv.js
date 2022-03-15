const { body, query } = require("express-validator");

module.exports = {
    registerv: [
        body('email').exists().withMessage('Email is required').isString().withMessage("email is a valid string"),
        body('password').exists().withMessage('password is required').isLength({min: 5}).withMessage("Password should be atleast 5 character long"),
        body('fullname').exists().withMessage('fullname is required').isString().withMessage("fullname should be a valid string"),
        body('username').exists().withMessage('username is required').isString().withMessage("usrname should be valid string"),
    ]
}