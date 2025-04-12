const config =require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

modul.exports = db = {};

initialize();

async function initialize() {
    const {host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({host, port, user, password, database });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql2'});

    db.Account = require('../accounts/account.model')(sequelize);
    db.RefreshToken = require('../accounts/refresh-token.model')(sequelize);

    db.Account.hasMany(db.RefreshToken, { onDelete:'CASCADE'});
    db.RefreshToken.belongsTo(db.Account);

    await sequilize.sync({ alter: true });

}