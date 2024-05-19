const { DataTypes } = require('sequelize')
const { sequelize } = require('../../config/sequelizeConnection')

const User = sequelize.define('User', {
  UserId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  RolUserId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})

module.exports = User
