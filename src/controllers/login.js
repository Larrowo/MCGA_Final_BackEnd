const userSchema = require('../models/users')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  const email = req.body?.email
  const password = req.body?.password
  if (!email || !password) {
    return res.status(422).json({
      error: true,
      msg: 'Enter email and password'
    })
  }
  try {
    const user = await userSchema.findOne({ email })
    if (!user) throw new Error('User not found!')
    if (user.password !== password) {
      const err = new Error('Wrong credentials!')
      err.status = 401
      throw err
    }

    const token = jwt.sign({ email, userId: user._id }, process.env.JWT_KEY, { expiresIn: '15m' })

    return res.status(200).json({
      message: 'User Logged',
      data: {
        token,
        user: {
          name: user.name,
          email: user.email,
          role: user.role
        }
      }
    })
  } catch (error) {
    return res.status(error.status || 400).json({
      error: true,
      msg: error
    })
  }
}

module.exports = { login }
