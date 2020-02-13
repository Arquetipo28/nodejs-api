// Controller file must have the same name as
// the specified resource route
// Example: users (resource), users.js (controller)

// This must be named as your resource
// Example 'Users'
class Resource {
  static show (id) {
    return Promise.resolve(`Responding to GET resource ${id}`)
  }

  static update (id) {
    return Promise.resolve(`Responding to UPDATE resource ${id}`)
  }

  static remove (id) {
    return Promise.resolve(`Responding to DELETE resource ${id}`)
  }

  static create (data) {
    return Promise.resolve(`Responding to POST resource with data: ${JSON.stringify(data)}`)
  }
}

// This must be named as your resource
// Example 'Users'
const resourceClass = Resource

const show = (req, res) => {
  const { id } = req.params
  resourceClass.show(id)
    .then(success => {
      res.send(success)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}

const update = (req, res) => {
  const { id } = req.params
  resourceClass.update(id)
    .then(success => {
      res.send(success)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}

const remove = (req, res) => {
  const { id } = req.params
  resourceClass.remove(id)
    .then(success => {
      res.send(success)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}

const create = (req, res) => {
  const { data } = req.body
  resourceClass.create(data)
    .then(success => {
      res.send(success)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}
module.exports = { show, update, remove, create }
