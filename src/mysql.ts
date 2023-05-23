import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "sql10.freesqldatabase.com",
  user: "sql10619742",
  password: "9mFwwBqtAv",
  port: 3306,
  database: "sql10619742",
});
