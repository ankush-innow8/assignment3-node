const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly fill the name field!',
  },
  email: {
    type: String,
    required: 'Kindly fill the email field!',
  },
  contact: {
    type: Number,
    required: 'Kindly fill the contact field!',
  },
  password: {
    type: String,
    required: 'Please enter your password!',
  },
  gasType: {
    type: [
      {
        type: String,
        enum: ['petrol', 'diesel', 'cng'],
      },
    ],
    required: true,
  },
  sector: {
    type: String,
  },
})

UserSchema.pre('save', async function (req, res, next) {
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

module.exports = mongoose.model('users', UserSchema)
