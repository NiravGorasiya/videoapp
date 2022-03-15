const GeneralError = require('./GeneralError')

class DataAlreadyExistsError extends GeneralError {

    constructor(message = "Data Already Exists !", moreInfo = []) {
        super();
        this.message = message;
        this.status = 400;
        this.moreInfo = moreInfo
        this.errorName = "DataAlreadyExistsError"
    }

}


module.exports = DataAlreadyExistsError