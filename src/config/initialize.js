const logger = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes')

function initialize (app) {
  const server = app

  const create = (config) => {
    server.use(logger('dev'))
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))
    // Set server configuration
    server.set('port', config.port)
    // Add routes structure and handlers
    routes.init(server)
  }

  const start = () => {
    const port = server.get('port')
    server.listen(port, () => {
      console.log(`Server is listenning in port: ${port}`)
    })
  }

  return { create, start }
}

module.exports = initialize
