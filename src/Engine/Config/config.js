module.exports = {
  production: {
    username: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_NAME}`,
    host: `${process.env.DB_HOSTNAME}`,
    dialect: `sqlite`,
  },
  test: {
    host: "testdb.sqlite",
    dialect: "sqlite",
  },
  development: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "sqlite",
  },
};
