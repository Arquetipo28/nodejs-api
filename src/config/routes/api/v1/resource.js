const express = require('express')
const router = express.Router()

router.get('/resource', (_req, res) => {
  res.send('Using GET to resource')
})

router.put('/resource/:id', (req, res) => {
  const resourceId = req.params.id
  res.send(`Using PUT to resource with id: ${resourceId}`)
})

router.delete('/resource/:id', (req, res) => {
  const resourceId = req.params.id
  res.send(`Using DELETE to resource with id: ${resourceId}`)
})

router.post('/resource', (_req, res) => {
  res.send('Using POST to resource')
})

module.exports = router
