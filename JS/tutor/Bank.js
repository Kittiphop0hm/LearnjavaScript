//Bank
class BankAccount {
    accountNumber
    ownerNumber
    balance
    transactions

    constructor(accountNumber = 0, ownerNumber) {
        this.accountNumber = accountNumber
        this.ownerNumber = ownerNumber
        this.balance = 0
        this.transactions = []
    }

    deposit = (money) => {
        const transaction = {deposit: money}
        this.balance += money
        this.transactions.push(transaction)
        return this.balance
    }

    withdraw = (money) => {
        const transaction = {withdraw: money}
        this.balance -= money
        this.transactions.push(transaction)
        return this.balance
    }

    getBalance = () => this.balance

    getTransaction = () => this.transactions
}

const b1 = new BankAccount(1, 1)
console.log(b1.deposit(1000));
console.log(b1.withdraw(500));
console.log(b1.getTransaction());
console.log(b1.getBalance());

//Course
class CourseManagment {
    courses
    courseId
    courseTitle
    courseTerm
    registeredStudents = []

    constructor() {
        this.courses = []
    }

    createCourse = (courseId, courseTitle = 'untitled', courseTerm = '2-2565') => {
        if (this.courses.some((course) => course.courseId === courseId)) return undefined
        const course = {courseId, courseTitle, courseTerm}
        this.courses.push(course)
        return course
    } 

    registerCourseWithOneStudent = (courseId, studentId) => {
        if (!this.courses.some((course) => course.courseId === courseId)) return -1
        this.registeredStudents.push(studentId)
        return this.registeredStudents.length
    }

    registerCourseWithStudents = (courseId, studentIds) => {
        if (!this.courses.some((course) => course.courseId === courseId)) return -1
        this.registeredStudents.push(...studentIds)
        return this.registeredStudents.length
    }

    findCourseIndex = (courseId) => {
        return this.courses.findIndex((course) => course.courseId === courseId)
    }

    getCourses = () => this.courses

    getCourse = (courseId) => {
        return this.courses.find((course) => course.courseId === courseId)
    }

    getRegisteredStudent = (courseId) => {
        if (this.courses.some((course) => course.courseId === courseId)) return this.registeredStudents
        return []
    }

    removeStudentInCourse = (courseId, studentId) => {
        if (this.courses.some((course) => course.courseId === courseId)) {
            let findIndexStudent = this.registeredStudents.indexOf((registeredStudent) => studentId)
            return this.registeredStudents.splice(findIndexStudent, 1)
        }
        return -1
    }
}

const course = new CourseManagment()
console.log(course.createCourse(1, 'Java Programming', '1-2566'));
console.log(course.createCourse(2, 'Python Programming', '1-2566'));
console.log(course.getCourses());

//regis One
console.log(course.registerCourseWithOneStudent(1, 9));
console.log(course.registerCourseWithOneStudent(2, 9));
console.log(course.registerCourseWithOneStudent(2, 9));
console.log(course.registerCourseWithOneStudent(3, 9));

//regis Many
console.log(course.registerCourseWithStudents(1, [1,2,3,4,5])); // 5+2
console.log(course.registerCourseWithStudents(3, [1,2,3,4,5])); 
//findIndex
console.log(course.findCourseIndex(1));
console.log(course.findCourseIndex(2));
//getCourse
console.log(course.getCourse(2));
//getRegis
console.log(course.getRegisteredStudent(1));
console.log(course.getRegisteredStudent(2));
//remove
console.log(course.removeStudentInCourse(1, 1));
console.log(course.getRegisteredStudent(2));
console.log(course.removeStudentInCourse(1, 2));
console.log(course.getRegisteredStudent(2));





