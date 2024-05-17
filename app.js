require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const contection = require('./config/mysql.js')

const PORT = process.env.PORT || 3001

app.use(cors)
app.use(express.json())

console.log(contection)

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})