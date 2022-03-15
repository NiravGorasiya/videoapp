const GeneralError = require('./GeneralError')

class JwtError extends GeneralError {

    constructor(message = "JWT Error", moreInfo = []) {
        super();
        this.message = message;
        this.status = 401;
        this.moreInfo = moreInfo
        this.errorName = "JwtError"
    }

}


module.exports = JwtError