// class Person {
//     constructor () {
//         this.name = 'Max';
//     }
// }
 
// const person = new Person();
// console.log(person.name); // prints 'Max'


class Human {
    species = 'human';
}
 
class Person extends Human {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();
console.log(person.species); // prints 'human'

// ANOTHER WAY


// class Person {
//     name = 'Max';
//     printMyName () {
//         console.log(this.name); // this is required to refer to the class!
//     }
// }
 
// const person = new Person();
// person.printMyName();

