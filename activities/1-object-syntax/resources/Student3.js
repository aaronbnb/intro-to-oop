const Student = function(name) {
    this.name = name;
    this.courses = [];
}


Student.prototype.enroll = function(course) {
    this.courses.push(course);
    return this.courses;
}

let student = new Student('Princess Carolyn')

student.enroll('Cybersecurity')

console.log(student);

