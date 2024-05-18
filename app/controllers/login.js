const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Login = require('../models/Login')

const auth = async (req, res) => {
  const { email, password } = req.body
  try {
    // Buscar el usuario por su correo electrónico en la base de datos
    const login = await Login.findOne({ where: { email } })
    if (!login) {
      console.log(`User not found for email: ${email}`)
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    // Validar la contraseña ingresada con la contraseña almacenada en la base de datos
    const isPasswordValid = await bcrypt.compare(password, login.password)
    if (!isPasswordValid) {
      console.log(`Invalid password for user: ${email}`)
      return res.status(401).json({ message: 'Credenciales inválidas' })
    }

    // Generar un token JWT con la información del usuario
    const token = jwt.sign(
      { userId: login.UserId, email: login.email },
      process.env.JWT_SECRET, // Debes definir esta variable de entorno
      { expiresIn: '1h' } // Opcional: Define el tiempo de expiración del token
    )

    console.log(`Login successful for user: ${email}`)

    // Devolver el token JWT como respuesta
    res.status(200).json({ message: 'Login Correct', token })
  } catch (error) {
    console.error('Error al iniciar sesión:', error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}

module.exports = { auth }
