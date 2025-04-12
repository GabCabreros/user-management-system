const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        token: { type: DataTypes.STRING, allowNull: false },
        expires: { type: DataTypes.DATE, allowNull: false },
        createdByIp: { type: DataTypes.STRING, allowNull: false },
        revoked: { type: DataTypes.DATE },
        revokedByIp: { type: DataTypes.STRING },
        replacedByToken: { type: DataTypes.STRING },
        accountId: { type: DataTypes.INTEGER, allowNull: false }
    };

    const options = {
        defaultScope: {
            attributes: { exclude: ['accountId'] }
        }
    };

    return sequelize.define('RefreshToken', attributes, options);
}
