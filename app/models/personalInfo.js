const { DataTypes } = require('sequelize');
const {sequelize} = require('../../config/sequelizeConnection')

const PersonalInfo = sequelize.define('PersonalInfo', {
    PersonalInfoId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    UserId: {
        type: DataTypes.BLOB('tiny'), 
        allowNull: false,
        references: {
            model: 'Users',
            key: 'UserId'
        }
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    timestamps: false
});

module.exports = PersonalInfo;
