const bookings = require('../models/bookingModel')

const booking = async (req, res, next) => {
  try {
    const booking = new bookings(req.body)
    await booking.save()
    res.status(200).json(booking)
  } catch (error) {
    res.status(511).send(error.message)
  }
}

const getBookings = async (req, res, next) => {
  try {
    const getBookings = await bookings
      .find()
      .populate('userId', ['name', 'contact'])
    res.status(200).json(getBookings)
  } catch (error) {
    res.status(511).send(error.message)
  }
}

const getBooking = async (req, res, next) => {
  try {
    const getB = await bookings
      .findOne({ _id: req.params.id })
      .populate('userId', ['name', 'contact'])
    if (!getB) return res.json({ msg: 'No bookings for this userId.' })
    res.status(200).json(getB)
  } catch (error) {
    res.status(511).send(error.message)
  }
}

const getBookingsByUserId = async (req, res, next) => {
  try {
    const getBookings = await bookings.find({ userId: req.params.uid })
    if (!getBookings) return res.json({ msg: 'No bookings for this user.' })
    res.status(200).json(getBookings)
  } catch (error) {}
}

module.exports = { booking, getBookings, getBooking, getBookingsByUserId }
