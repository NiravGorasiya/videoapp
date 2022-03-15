const GeneralError = require('./GeneralError')

class SequelizeDbError extends GeneralError {

    constructor(message = "Database Error", moreInfo = []) {
        super();
        this.message = message;
        this.status = 400;
        this.moreInfo = moreInfo
        this.errorName = "SequelizeDbError"
    }

}


module.exports = SequelizeDbError