const environment = require('./src/config/environment')
const express     = require('express')
const app         = express()

const initialize = require('./src/config/initialize')(app)
initialize.create(environment)
initialize.start()
