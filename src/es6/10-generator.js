function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['shadown', 'tobi', 'casa', 'goku']);


console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
