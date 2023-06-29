module.exports = {
  "development": {
    "username": "root",
    "password": "qwer1234",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "qwer1234",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": "mysql"
  }
}