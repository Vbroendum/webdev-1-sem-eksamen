const mysql = require('mysql2/promise');
const config = require('./config');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Create connection pool
const pool = mysql.createPool({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test the connection
pool.getConnection()
    .then(connection => {
        console.log(`forbindelse til database: ${dbConfig.database}`);
        connection.release();
    })
    .catch(err => console.error('Fejl ved forbindelse til database:', err));

module.exports = pool;