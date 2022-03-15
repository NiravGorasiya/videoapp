const GeneralError = require('./GeneralError')

class NodemailerError extends GeneralError {

    constructor(message = "Nodemailer Error", moreInfo = []) {
        super();
        this.message = message;
        this.status = 500;
        this.moreInfo = moreInfo
        this.errorName = "NodemailerError"
    }

}


module.exports = NodemailerError