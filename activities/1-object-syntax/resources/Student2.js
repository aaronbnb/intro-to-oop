const Student = function(name) {
    this.name = name;
    this.courses = [];

    this.enroll = function(course) {
        this.courses.push(course);

        // return is used to output a value
        
        // When you push an element to an array, it returns the array's new length.
        // Return statements are often used to indicate whether a method that changes
        // the internal state of an object succeeded or failed.
        // We're returning this.courses to indicate success and show updated courseload. 
        return this.courses;
    }

}


let student = new Student('Princess Carolyn')

student.enroll('Cybersecurity')

console.log(student);

