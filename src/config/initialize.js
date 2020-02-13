const routes = require('./routes')

function initialize (app) {
  const create = () => {
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
