module.exports = (app) => {
  // This requires the entire endpoints
  // structured as folders inside
  // api/V[version]/index.js with endpoints
  require('./api')(app)
}
