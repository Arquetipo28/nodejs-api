const logger = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes')

function initialize (app) {
  const create = () => {
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    // Add routes structure and handlers
    routes(app)
  }

  const start = () => {
    app.listen(3000, () => {
      console.log('Server is listenning in port: 3000')
    })
  }

  return { create, start }
}

module.exports = initialize
