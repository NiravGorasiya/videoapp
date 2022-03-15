const GeneralError = require('./GeneralError')

class SendgridApiError extends GeneralError {

    constructor(message = "Error from Sendgrid API", moreInfo = [], status = 500) {
        super();
        this.message = message
        this.status = status;
        this.moreInfo = moreInfo.map((e) => {
            return { msg: e.message }
        })
        this.errorName = "SendgridAPIError"
    }

}


module.exports = SendgridApiError