import { getConnection } from "../../database";
import { GetUser } from "../domain/get-user";
import { User } from "../domain/user";

export class UserRepository implements GetUser {
  async getById(userId: number): Promise<User | null> {
    const connection = await getConnection();
    const rows: any[] = await connection.query(
      "SELECT * FROM users WHERE id = ?",
      [userId]
    );
    // Aquí debes usar el método adecuado para liberar la conexión en tu biblioteca de bases de datos

    if (rows.length === 0) {
      return null;
    }

    const user = rows[0];
    console.log("hola", rows[0], user[0].id); //si tiene datos la consulta, nunca esta vacio

    return new User(
      user[0].id,
      user[0].name,
      user[0].username,
      user[0].password,
      user[0].email
    );
  }
}
