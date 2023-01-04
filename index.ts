class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

class Student extends Person {
  rollNumber: string;
  courses: Course[] = [];

  constructor(name: string, age: number, rollNumber: string) {
    super(name, age);
    this.rollNumber = rollNumber;
  }

  registerForCourse(course: Course) {
    this.courses.push(course);
  }
}

class Instructor extends Person {
  private salary: number;
  courses: Course[] = [];

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }

  assignCourse(course: Course) {
    this.courses.push(course);
  }
}

class Course {
  id: string;
  name: string;
  students: Student[] = [];
  instructors!: Instructor;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  addStudent(student: Student) {
    this.students.push(student);
    student.registerForCourse(this);
  }

  setInstructor(instructor: Instructor) {
    this.instructors = instructor;
    instructor.assignCourse(this);
  }
}

class Department {
  name: string;
  courses: Course[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addCourse(course: Course) {
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

let course2 = new Course("course2", "BlockChain");

let department1 = new Department("Computer Science");
department1.addCourse(course1);
department1.addCourse(course2);
