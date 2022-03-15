const GeneralError = require('./GeneralError')

class PermissionDeniedError extends GeneralError {
    constructor(message = "Permission Denied to Access this route", moreInfo = []) {
        super();
        this.message = message === "" ? "Permission Denied to Access this route" : message;
        this.status = 401;
        this.moreInfo = moreInfo
        this.errorName = "PermissionDeniedError"

    }

}


module.exports = PermissionDeniedError