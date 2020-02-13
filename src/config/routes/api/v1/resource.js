// Each resource file must be named
// as the resource itself
// Example: users (resource), users.js (file)

const express = require('express')
const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Using GET to resource')
})

router.put('/:id', (req, res) => {
  const resourceId = req.params.id
  res.send(`Using PUT to resource with id: ${resourceId}`)
})

router.delete('/:id', (req, res) => {
  const resourceId = req.params.id
  res.send(`Using DELETE to resource with id: ${resourceId}`)
})

router.post('/', (_req, res) => {
  res.send('Using POST to resource')
})

module.exports = router
