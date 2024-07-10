const profile ={
    name: ["Jahangir","Alam"],
    age: 18,
    bio (){
        return  `${this.name[0]} ${this.name[1]} is ${this.age} years old.`
    },
    gretting: function(){
        return  `Hi! i am ${this.name[0]}!`
    }
}

console.log(profile.bio());