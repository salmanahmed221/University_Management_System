class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructors;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourse(this);
    }
    setInstructor(instructor) {
        this.instructors = instructor;
        instructor.assignCourse(this);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
let student1 = new Student("Ali", 20, "student1");
let student2 = new Student("Ahmed", 19, "student2");
let instructor1 = new Instructor("Sir Zia", 50, 100000000);
let instructor2 = new Instructor("Sir Ali", 22, 1000000);
let course1 = new Course("course1", "Metaverse");
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
// console.log(course1.instructors);
let course2 = new Course("course2", "BlockChain");
let department1 = new Department("Computer Science");
department1.addCourse(course1);
department1.addCourse(course2);
console.log(department1);
export {};
