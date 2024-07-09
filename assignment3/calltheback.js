const person = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName : "John",
    lastName : "Snow"
}

const person2 = {
    firstName : "Illiya",
    lastName : "Snow"
}

console.log(person.fullName.call(person1));

