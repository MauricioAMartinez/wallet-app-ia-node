const {sequelize} = require('../../config/sequelizeConnection')
const { DataTypes } = require('sequelize')

const Tipotrabajos = sequelize.define('Tipotrabajos', {

    TipoTrabajoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at'

})

module.exports = Tipotrabajos;