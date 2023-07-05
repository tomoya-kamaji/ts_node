export class User {
  readonly id: number
  readonly name: string
  readonly age: number | undefined

  constructor(name: string, age: number | undefined) {
    this.id = 1
    this.name = name
    this.age = age
  }

  static create(name: string, age: number | undefined) {
    validate(name, age)
    return new User(name, age)
  }

  static reconstruct(name: string, age: number | undefined) {
    return new User(name, age)
  }
}

function validate(name: string, age: number | undefined): Error | undefined {
  if (name.length < 3) {
    return new Error('Name is too short')
  }
  if (age && age < 0) {
    return new Error('Age is too small')
  }
}
