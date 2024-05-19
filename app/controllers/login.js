const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4, parse: uuidParse, stringify: uuidStringify } = require('uuid');
const Login = require('../models/Login');

const auth = async (req, res) => {
  const { email, password } = req.body;
  try {
    const login = await Login.findOne({ where: { email } });
    if (!login) {
      console.log(`User not found for email: ${email}`);
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(password, login.password);
    if (!isPasswordValid) {
      console.log(`Invalid password for user: ${email}`);
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { userId: login.UserId, email: login.email },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' } 
    );

    const userIdUUID = uuidStringify(login.UserId);

    res.status(200).json({ message: 'Login Correct', token, UserId: userIdUUID, rol: login.RolUserId });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = { auth };
