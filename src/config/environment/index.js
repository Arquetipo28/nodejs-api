const _ = require('lodash')
const dotenv = require('dotenv')

dotenv.config()

const env           = process.env.NODE_ENV
const principalPort = process.env.PORT
const envConfig     = require(`./${env}.json`)

if (principalPort) _.merge(envConfig, { port: principalPort })

const configuration = envConfig

module.exports = configuration
