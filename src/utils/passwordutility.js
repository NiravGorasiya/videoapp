const bcrypt = require('bcrypt')
    //bcrypt
const encryptPassword = (plainTextPassword) => {
    const encrypted = bcrypt.hashSync(plainTextPassword, 10)
    return encrypted;
}


const comparePasswords = async(plainTextPass, passHash) => {
    
    const result = await bcrypt.compare(plainTextPass, passHash)
    return result;
}
module.exports = { encryptPassword, comparePasswords }