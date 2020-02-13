const path = require('path')
const root = path.dirname(require.main.filename)
const loader = require(`${root}/src/controllers`)

// Each resource file must be named
// as the resource itself
// Example: users (resource), users.js (file)

const express = require('express')
const router = express.Router()

const resourceName = path.basename(__filename).split('.')[0]

router.get('/:id', loader.loadController(resourceName, 'show'))

router.put('/:id', loader.loadController(resourceName, 'update'))

router.delete('/:id', loader.loadController(resourceName, 'remove'))

router.post('/', loader.loadController(resourceName, 'create'))

module.exports = router
