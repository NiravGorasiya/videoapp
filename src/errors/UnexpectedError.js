const GeneralError = require('./GeneralError')

class UnexpectedError extends GeneralError {

    constructor(message = "Unexpected Error Occured", moreInfo = []) {
        super();
        this.message = message;
        this.status = 500;
        this.errorName = "UnexpectedError"
    }

}


module.exports = UnexpectedError