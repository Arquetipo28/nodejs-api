const glob = require('glob')
const path = require('path')
const express = require('express')
var router = express.Router()

const files = glob.sync(`${__dirname}/*.js`)
files.forEach(file => {
  // Prevent version index importation
  if (file.includes('index.js')) return

  const versionEndpoints = require(path.resolve(file))
  // The route will have the same name as the file it is placed on
  const resourceNameParts = path.basename(file).split('.')
  const resourceName      = resourceNameParts[0]

  router.use(`/v1/${resourceName}`, versionEndpoints)
})

module.exports = router
