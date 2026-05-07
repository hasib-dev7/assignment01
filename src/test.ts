// // Sample Input:
// const student = new Student("Alice", 20, "A");
// student.getDetails();

// // Sample Output:
// "Name: Alice, Age: 20, Grade: A";

class Person{
    constructor(public name:string,public age:number){}
}
class Student extends Person {
    constructor(name :string,age:number,public grade:string){
        super(name,age)
    }
    getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}
const student = new Student("Alice", 20, "A");
console.log(student.getDetails())