const GeneralError = require('./GeneralError')

const UserNotFoundError = require('./UserNotFoundError')
const UnauthorizedError = require('./UnauthorizedError')
const DataValidationError = require('./DataValidationError')
const UnexpectedError = require('./UnexpectedError')
const InternalServerError = require('./InternalServerError')
const DataNotFoundError = require('./DataNotFoundError')
const PermissionDeniedError = require('./PermissionDeniedError')
const PermissionDoesNotExist = require('./PermissionDoesNotExist')
const DataAlreadyExistsError = require('./DataAlreadyExistsError')
const JwtError = require('./JwtError')
const EmailAlreadyVerifiedError = require('./EmailAlreadyVerifiedError')
const BadDataError = require('./BadDataError')
const SequelizeDbError = require('./SequelizeDbError')
const IntegrationNotFoundError = require('./IntegrationNotFoundError')
const TgCfApiError  = require('./TgCfApiError')
const CustomError = require('./CustomError')
module.exports = {

    GeneralError,

    UserNotFoundError,
    UnauthorizedError,
    DataValidationError,
    UnexpectedError,
    InternalServerError,
    DataNotFoundError,
    PermissionDeniedError,
    PermissionDoesNotExist,
    DataAlreadyExistsError,
    JwtError,
    EmailAlreadyVerifiedError,
    BadDataError,
    SequelizeDbError,
    IntegrationNotFoundError,
    TgCfApiError,
    CustomError
}