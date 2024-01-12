function newUser (name, age, country) {
    var name = name || 'Ervin';
    var age = age || 19;
    var country = country || 'Col';
    console.log(name, age, country);
}

newUser();
newUser('Oscar', 52, 'Mexico');

function newAdmin(name = 'Ervin', age = 19, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 52, 'PE');










