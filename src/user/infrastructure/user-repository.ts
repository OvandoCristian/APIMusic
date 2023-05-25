import { createPool } from "../../mysql";
import { GetUser } from "../domain/get-user";
import { User } from "../domain/user";

export class UserRepository implements GetUser {
  async getById(userId: number): Promise<User | null> {
    const connection = await createPool();
    const rows: any[] = await connection.query("SELECT * FROM users WHERE id = ?",[userId]);

    if (rows.length === 0) {
      return null;
    }

    console.log("Bienvenido", rows); 

    return new User(
      rows[0].id,
      rows[0].name,
      rows[0].username,
      rows[0].password,
      rows[0].email
    );
  }
}
