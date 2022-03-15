const GeneralError = require('./GeneralError')

class IntegrationNotFoundError extends GeneralError {

    constructor(message = "The branch does not have an integration with the given service", moreInfo = []) {
        super();
        this.message = message;
        this.status = 404;
        this.moreInfo = moreInfo
        this.errorName = "IntegrationNotFoundError"
    }

}


module.exports = IntegrationNotFoundError