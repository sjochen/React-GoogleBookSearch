module.exports = {
  "development": {
    "username": process.env.REACT_APP_USER,
    "password": process.env.REACT_APP_KEY, 
    "database": process.env.REACT_APP_DBNAME,
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  }
}
