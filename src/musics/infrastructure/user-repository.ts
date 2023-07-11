
import { CreateUser } from "../domain/CreateUser";
import { User } from "../domain/user";
import amqp from 'amqplib';

const rabbitSettings = {
  protocol: 'amqp',
  hostname: '3.213.125.252',
  port: 5672,
  username: 'diegoortiz',
  password: 'diegoortiz',
};

export class AddUserRepository implements CreateUser {
  async addUser(
    Id: string,
    Username: string,
    Password: string,
  ): Promise<User | null> {
    try {
      
      const user = new User(Id, Username, Password);
        
        const queue = "Usuario";
        const message = Username; 
        console.log(message);
        
        try {
          const conn = await amqp.connect(rabbitSettings);
          console.log('Conexión exitosa');
      
          const channel = await conn.createChannel();
          console.log('Canal creado exitosamente');
      
          const res = await channel.assertQueue(queue);
          console.log('Cola creada exitosamente', res);
      
           await channel.sendToQueue(queue, Buffer.from(message));
      
          console.log(`Mensaje insertado en la cola: ${message}`);
      
        } catch (error) {
          console.log(error)
          throw error;
        }
      

      return user;
    } catch (error) {
      throw new Error(`No se pudo agregar el usuario: ${error}`);
    } finally {
    }
  }
}
