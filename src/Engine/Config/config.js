module.exports = {
  production: {
    username: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_NAME}`,
    host: `${process.env.DB_HOSTNAME}`,
    dialect: `sqlite`,
  },
  development: {
    host: "testdb.sqlite",
    dialect: "sqlite",
  },
};
