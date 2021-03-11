const { Client } = require("pg");

const db = new Client({
  host:  process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

db
  .connect()
  .then(() => {
    console.log("database is running");
  })
  .catch((err) => {
    console.log("database error", err);
  });

module.exports = db;
