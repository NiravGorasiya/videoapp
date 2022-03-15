const GeneralError = require('./GeneralError')

class BadDataError extends GeneralError {

    constructor(message = "Bad Data", moreInfo = []) {
        super();
        this.message = message;
        this.status = 400;
        this.moreInfo = moreInfo
        this.errorName = "BadDataError"
    }

}


module.exports = BadDataError