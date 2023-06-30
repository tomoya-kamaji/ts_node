export class User {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  static create(name: string, age: number) {
    return new User(name, age);
  }
}
