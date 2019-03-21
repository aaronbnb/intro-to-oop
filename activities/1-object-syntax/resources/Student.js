



const Student = function(name, course) {
    this.name = name;
    this.course = course;

}

let student = new Student('Mr. Turtletaub', 'Full Stack')

// The ES6 class declaration way
// class Student {
//     constructor(name, course) {
//         this.name = this.name;
//         this.course = this.course;
//     }
// }


// use node to run this file and look at your object in terminal.
// node student.js