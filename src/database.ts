import mysql from "mysql2/promise";

export function getConnection() {
  return mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    user: "sql10619742",
    password: "9mFwwBqtAv",
    port: 3306,
    database: "sql10619742",
  });
}
