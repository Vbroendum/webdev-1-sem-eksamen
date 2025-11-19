const mysql = require('mysql2/promise');
const config = require('./config');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const pool = mysql.createPool({
    host: dbConfig.host,
    port: dbConfig.port || 3307,
    user: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;