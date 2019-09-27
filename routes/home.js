module.exports = (app) => {
  app.get('/', (_req, res) => {
    res.send("I'm inside home");
  })
}