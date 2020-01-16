import mssql from "mssql";
import dotenv from "dotenv";

dotenv.config();
const env = process.env;

const config = {
  user: env._USER,
  password: env._PASSWORD,
  server: env._SERVER,
  port: parseInt(env._PORT),
  database:
    env.NODE_ENV === "build" ? env._PRODUCT_DATABASE : env._TEST_DATABASE
};

const poolPromise = new mssql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log("SQL Server connected");
    return pool;
  })
  .catch(err => console.log(`Database Connection Failed! ${err}`));

module.exports = {
  mssql,
  poolPromise
};
