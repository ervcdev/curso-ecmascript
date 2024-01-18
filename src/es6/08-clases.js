//declarando clase
class User {}

class user {
  //Metodos
  greeting() {
    return "Hello";
  }
}

const userN = new user(); //instancia del objeto
console.log(userN.greeting());

//cuando se creen una instancia va inicializar los objetos dentro del contructor
class user {
  constructor() {
    console.log("nuevo usuario");
  }
  greeting() {
    return "Hello";
  }
}
const shadown = new user();

//this hace referencia al elemento padre que lo contiene

class User {
  constructor(name) {
    this.name = name;
  }
  //metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name} `;
  }
}

const ana = new User("Ana");
console.log(ana.greeting());

//setter and getter

class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name} `;
  }
  get uAge(){
    return this.age
  }
  set uAge(n) {
    this.age = n;
  }
}

const datos = new user('merf', 78);
console.log(datos.uAge);