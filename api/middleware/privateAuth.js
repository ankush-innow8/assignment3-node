const auth = require('./auth')

const privateAuth = async (req, res, next) => {
  const pub = ['/api', '/api/register', '/api/login']
  if (pub.includes(req.originalUrl)) {
    next()
  } else {
    auth(req, res, next)
  }
}

module.exports = privateAuth
