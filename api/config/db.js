const mongoose = require('mongoose')

const connectDB = async (req, res, next) => {
  try {
    await mongoose.connect(process.env.DB_SECRET, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log('Database connected!')
  } catch (error) {
    console.log("Error : couldn't connect to database!")
  }
}

module.exports = connectDB
