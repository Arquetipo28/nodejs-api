// This file takes care about
// loading controllers dynamically

const loadController = (name, method) => {
  const controller = require(`./${name}.js`)
  if (isValidMethod(method)) return controller[method]
}

const isValidMethod = (method) => {
  const methodList = ['show', 'update', 'remove', 'create']
  return methodList.includes(method)
}

module.exports = { loadController }
