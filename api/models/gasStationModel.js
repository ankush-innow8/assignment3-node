const mongoose = require('mongoose')

const Schema = mongoose.Schema

const gasStationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sector: {
    type: Number,
    required: true,
  },
  gasType: [
    {
      type: String,
      enum: ['petrol', 'diesel', 'cng'],
      required: true,
    },
  ],

  stationNumber: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('gasStation', gasStationSchema)
