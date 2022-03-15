const GeneralError = require('./GeneralError')

class CustomError extends GeneralError {

    constructor(status=500,message="Custom Error", moreInfo = [], errorName='CustomError') {
        super();
        this.message = message;
        this.status = status;
        this.moreInfo = moreInfo
        this.errorName = errorName
    }

}


module.exports = CustomError