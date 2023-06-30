export class User {
  private name: string
  private age: number | undefined

  constructor(name: string, age: number | undefined) {
    this.name = name
    this.age = age
  }
  static create(name: string, age: number | undefined) {
    return new User(name, age)
  }

  static reconstruct(name: string, age: number | undefined) {
    return new User(name, age)
  }
}
