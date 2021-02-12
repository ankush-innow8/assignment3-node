const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookingSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'users',
  },
  gasStationId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'gasStation',
  },
  gasType: [
    {
      type: String,
      ref: 'gasStation',
    },
  ],
  status: {
    type: [
      {
        type: String,
        enum: ['Successful', 'Failed'],
      },
    ],
    default: ['Successful'],
  },
})
module.exports = mongoose.model('bookingSchema', bookingSchema)
