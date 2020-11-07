const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname + "../../../../.env") });
const config = {
  PORT: process.env.PORT || 5000,
  DATABASE_ENV: process.env.NODE_ENV || "development", // development , production
  DATABASE_HOST: process.env.DB_HOST || "sqlite_db.sqlite",
  DATABASE_PORT: process.env.DB_PORT || "5432",
  DATABASE_DIALECT: process.env.DB_DIALECT || "sqlite", // sqlite, mysql, postgres, mariadb, mssql
  DATABASE_PASSWORD: process.env.DB_PWORD || "test",
  DATABASE_USERNAME: process.env.DB_USER || "user",
  DATABASE_NAME: process.env.DB_NAME || "database_development",
};
module.exports = config;
