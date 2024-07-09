const person = {
    Fullname: function(){
        return this.firstname +" "+ this.lastname;
    }
};

const person1 = {
    firstname:"firstname",
    lastname:"dsf"
}

console.log(person.Fullname.call(person1));