const mysql = require('mysql2/promise')
require('dotenv').config()

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
}

const contection = await mysql.createConnection(config)

module.exports = { contection }
