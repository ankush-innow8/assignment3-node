const router = require('express').Router()
const {
  booking,
  getBooking,
  getBookings,
  getBookingsByUserId,
} = require('../controllers/bookingController')

router.post('/', booking)

router.get('/allbookings', getBookings)

router.get('/:id', getBooking)

router.get('/users/:uid', getBookingsByUserId)

module.exports = router
