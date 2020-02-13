// Handlers
const errorLoggerHandler = (err, _req, _res, next) => {
  console.error(err.stack)
  next(err)
}

const clientErrorHandler = (err, req, res, next) => {
  if (req.xhr) {
    res.status(500).json({ error: 'Something failed!' })
  } else {
    next(err)
  }
}

const gravityErrorHandler = (_err, _req, res, _next) => {
  res.status(500).json({ message: 'Service request gravity error' })
}

const nonexistentRouteHandler = (_req, res, _next) => {
  res.status(404).json({ message: "Requested resource doesn't exist" })
}

module.exports = (app) => {
  // Initialize error handlers
  app.use(errorLoggerHandler)
  app.use(clientErrorHandler)
  app.use(gravityErrorHandler)

  // This requires the entire endpoints
  // structured as folders inside
  // api/V[version]/index.js with endpoints
  require('./api')(app)

  // Prevent unmatched routes
  app.use('*', nonexistentRouteHandler)
}
