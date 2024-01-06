//enahced object literals

//como se hacia una funcion y retornaba un objeto
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('Ervin', 58, 'COL', 5));




