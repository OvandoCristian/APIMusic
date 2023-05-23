import { RowDataPacket } from "mysql2/typings/mysql";

import { GetUser } from "../domain/get-user";
import { User } from "../domain/user";
import { pool } from "../../mysql";

export class UserRepository implements GetUser {
  async getById(userId: number): Promise<User | null> {
    const [connection] = await pool.query("SELECT * FROM users WHERE id = ?",[userId]);
    const rows: RowDataPacket[] = connection as RowDataPacket[];
   
    // Aquí debes usar el método adecuado para liberar la conexión en tu biblioteca de bases de datos

    if (rows.length === 0) {
      return null;
    }

    console.log("Bienvenido", rows); //si tiene datos la consulta, nunca esta vacio

    return new User(
      rows[0].id,
      rows[0].name,
      rows[0].username,
      rows[0].password,
      rows[0].email
    );
  }
}
