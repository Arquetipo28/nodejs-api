const express = require('express')

const app = express()

const initialize = require('./src/config/initialize')(app)
initialize.create()
initialize.start()
