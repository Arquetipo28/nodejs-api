module.exports = (app) => {
  app.get('/profile/:user', (req, res) => {
    res.send(`Hello ${req.params.user}`)
  })
}
