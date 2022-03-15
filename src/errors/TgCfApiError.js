const GeneralError = require('./GeneralError')

class TgCfApiError extends GeneralError {

    constructor(message = "TG Course Finder Api Error", moreInfo = []) {
        super();
        this.message = message;
        this.status = 500;
        this.moreInfo = moreInfo
        this.errorName = "TgCfApiError"
    }

}


module.exports = TgCfApiError