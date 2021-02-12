const router = require('express').Router()
const {
  postStation,
  getStationBySector,
} = require('../controllers/gasController')

router.post('/', postStation)

router.get('/search', getStationBySector)

module.exports = router
