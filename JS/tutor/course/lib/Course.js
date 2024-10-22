class CourseManagement {
    static registeredStudents = []
    constructor() {
        this.courses = []
    }
    
    createCourse(courseId, courseTitle = 'untitled', courseTerm = '2-2565') {
       return this.courses({courseId, courseTitle, courseTerm})
    }

    registerCourseWithOneStudent(courseId, studentId) {
        if(!this.courses.some((course) => course.courseId === courseId)) return -1
        return CourseManagement.registeredStudents.push(studentId)
    }

    registerCourseWithStudents(courseId, studentIds) {
        if (!this.courses.some((course) => course.courseId === courseId)) return -1
        return CourseManagement.registeredStudents.push(...studentIds)
    }

    findCourseIndex(courseId) {
        return this.courses.find((course) => course.courseId === courseId)
    }

    removeCourse(courseId) {
        return this.courses.splice(findCourseIndex(courseId), 1)
    }

    getCourses = () => this.courses
    getCourse = (courseId) => this.courses.find((course) => course.courseId === courseId)
    // getRegisteredStudent(courseId) {
        
    // }
}