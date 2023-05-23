export class User {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly username: string,
    readonly password: string,
    readonly email: string
  ) {}
}
