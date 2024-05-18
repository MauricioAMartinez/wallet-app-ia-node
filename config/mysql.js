const mysql = require('mysql2/promise')
require('dotenv').config()

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
}

async function connectToDatabase () {
  try {
    const connection = await mysql.createConnection(config)
    console.log('Connected to the MySQL server.')
    return connection
  } catch (error) {
    console.error('Error connecting to the MySQL server:', error)
    throw error // Propagate the error so it can be handled by the caller
  }
}

module.exports = connectToDatabase
