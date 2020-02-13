const glob = require('glob')
const path = require('path')

// This must import index of each API version
// Future versions should be named as ./V[version]/index.js

const initVersionRoutes = (server) => {
  const files = glob.sync(`${__dirname}/*/index.js`)
  files.forEach(file => {
    const versionModule = require(path.resolve(file))
    server.use('/api', versionModule)
  })
}
module.exports = { initVersionRoutes }
