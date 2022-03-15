const GeneralError = require('./GeneralError')

class GoogleApiError extends GeneralError {

    constructor(message = "Data Already Exists !", moreInfo = [], status = 500) {
        super();
        this.message = message;
        this.status = status;
        this.moreInfo = moreInfo
        this.errorName = "GoogleApiError"
    }

}


module.exports = GoogleApiError