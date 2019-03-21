// Make an instructor constructor function

// an instructor should have a name, a technology i.e. Web Development, Data Science, or Cybersecurity, and an array of courses

// an instructor should be able to accept a teaching assignment

// Initialize a new instructor

const Instructor = function (name, technology) {
    this.name = name;
    this.technology = technology;
    this.courses = [];

}

Instructor.prototype.accept = function(course) {
    this.courses.push(courses);

    return this.courses
}