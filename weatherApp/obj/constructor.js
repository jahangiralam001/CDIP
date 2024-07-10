function Student(name){
    this.name = name,
    this.intro = ()=>{
        console.log(`Hi! i am ${this.name}`);
    }

}

const student1 = new Student("Ridhima");
student1.intro()