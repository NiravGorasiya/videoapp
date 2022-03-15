const GeneralError = require('./GeneralError')

class PermissionDoesNotExist extends GeneralError {

    constructor(message = "Permission does not exist on the user !", moreInfo = []) {
        super();
        this.message = message
        this.status = 401;
        this.moreInfo = moreInfo
        this.errorName = "PermissionDoesNotExist"
    }
}


module.exports = PermissionDoesNotExist