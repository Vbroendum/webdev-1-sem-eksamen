require('dotenv').config();

module.exports =
{
  "development": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "root",
    "database": process.env.DB_NAME || "webdeveksamen",
    "host": process.env.DB_HOST || "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "root",
    "database": process.env.DB_NAME || "webdeveksamen",
    "host": process.env.DB_HOST || "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "root",
    "database": process.env.DB_NAME || "webdeveksamen",
    "host": process.env.DB_HOST || "localhost",
    "dialect": "mysql"
  }
}
