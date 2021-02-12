const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const registerUser = async (req, res, next) => {
  try {
    const isEmail = await User.findOne({ email: req.body.email })
    if (isEmail) return res.status(409).json({ err: 'Email already exists!' })

    const user = new User(req.body)
    await user.save()
    res.status(200).json(user)
  } catch (error) {
    res.send(error.message)
  }
}

const loginUser = async (req, res, next) => {
  try {
    const isEmail = await User.findOne({ email: req.body.email })
    if (!isEmail) return res.status(409).json({ err: "Email doesn't exist!" })

    const isMatch = await bcrypt.compare(req.body.password, isEmail.password)
    console.log(isMatch)
    if (!isMatch) return res.status(401).json({ err: 'Wrong Password' })

    const token = await jwt.sign({ _id: isEmail.id }, process.env.SECRET_KEY)
    res.header('x-auth-token', token).status(200).json({ token, isEmail })
  } catch (error) {}
}

module.exports = { registerUser, loginUser }
