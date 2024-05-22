const Tipotrabajos = require('../models/trabajos')

const getTrabajos = async (req, res) => {
  try {
    const trabajos = await Tipotrabajos.findAll()
    res.status(200).json(trabajos)
  } catch (error) {
    console.error('Error getting trabajos:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = { getTrabajos }
