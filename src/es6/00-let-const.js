var lastName = 'David'; //declarion y asignacion
lastName = 'Oscar'; //reasignar
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'cat';
console.log(anima);

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; //global, function scope
        //var y let solo pueden ser accedidas dentro del bloque donde fueron declaradas
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();



