// destructuracion que trabaja con arrays y objetos.
//arrays destructuring

let fruits = ['Apple', 'Banana'];

let [a,b] = fruits;
console.log(a,b);
console.log(a, fruits[1]);

//object destructuring
let user = {username: 'Evin', age:19, city: 'COL'}
let {username, age, city} = user;
console.log(username, user.age);


//spreed operator
//nos permite trabajar segun sea el caso con una logicapara propagar la informacion hacia otros elementos cuando se esta asignando.
let person = {name: 'Isaura', age: 28};
let country = 'Mx'

//la propagaciòn la hacemos gracias a los 3 puntos, para decir que lo que encuentre lo va a asignar al nuevo elemento
let data = {id: 1,...person, country}
console.log(data);

//rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,4,1,2,3,4)




