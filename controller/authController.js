
const jwt=require('jsonwebtoken')
const User=require('../models/user')


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ msg: "Invalid credentials" })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

    res.json({
      token,
      user: {
        email: user.email,
        role: user.role
      }
    });
    
  } catch (error) {
    console.error("Login error:", error.message)
    res.status(500).json({ msg: "Server error during login" })
  }
}



// Admin-only: Register (optional)
exports.register = async (req, res) => {
  const { email, password, role } = req.body
  const user = await User.create({ email, password, role })
  res.status(201).json(user)
}