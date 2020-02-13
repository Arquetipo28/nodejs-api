const glob = require('glob')
const path = require('path')
const express = require('express')
var router = express.Router()

const files = glob.sync(`${__dirname}/*.js`)
files.forEach(file => {
  if (file.includes('index.js')) return

  const versionEndpoints = require(path.resolve(file))
  router.use('/v1', versionEndpoints)
})

module.exports = router
