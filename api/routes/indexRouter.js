const router = require('express').Router()
const userRoutes = require('./userRoutes')
const stationRoutes = require('./gasStationRoutes')
const bookingRoutes = require('./bookingRoutes')

router.use('/users', userRoutes)
router.use('/stations', stationRoutes)
router.use('/bookings', bookingRoutes)

module.exports = router
