class CourseManagement {
    constructor() {
        this.courses = []
        this.registeredStudents = []
    }
    
    createCourse(courseId, courseTitle = 'untitled', courseTerm = '2-2565') {
       return this.courses.push({courseId, courseTitle, courseTerm, students: this.registeredStudents})
    }

    registerCourseWithOneStudent(courseId, studentId) {
        if(!this.courses.some((course) => course.courseId === courseId)) return -1
        //
    }

    registerCourseWithStudents(courseId, studentIds) {
        if (!this.courses.some((course) => course.courseId === courseId)) return -1
        CourseManagement.registeredStudents.push(...studentIds)
        return studentIds.length
    }

    findCourseIndex(courseId) {
        return this.courses.find((course) => course.courseId === courseId)
    }

    removeCourse(courseId) {
        return this.courses.splice(this.findCourseIndex(courseId), 1)
    }

    getCourses = () => this.courses
    getCourse = (courseId) => this.courses.find((course) => course.courseId === courseId)
    // getRegisteredStudent(courseId) {
        
    // }
}


    // Test Case 1: Create a new CourseManagement instance and add courses
    const cm = new CourseManagement()
    console.log(cm.createCourse('INT201', 'Client Side I', '1-2565')) // Expected: undefined (course created)
    console.log(cm.createCourse('INT202', 'Server Side I', '1-2565')) // Expected: undefined (course created)
    console.log(cm.createCourse('Gen101')) // Expected: undefined (course created)
    console.log(cm.createCourse('INT203')) // Expected: undefined (course created)
    console.log('-----------------------------------------------------')

    // Test Case 2: Register students for courses
    console.log(cm.registerCourseWithOneStudent('INT201', 1001)) // Expected: 1 (student registered)
    console.log(cm.registerCourseWithOneStudent('INT203', 1001)) // Expected: 1 (student registered)
    console.log(cm.registerCourseWithOneStudent('INT203', 1002)) // Expected: 2 (student registered)
    console.log(cm.registerCourseWithOneStudent('INT203', 1006)) // Expected: 3 (student registered)
    console.log(cm.registerCourseWithOneStudent('INT202', 1002)) // Expected: 1 (student registered)
    console.log(cm.registerCourseWithOneStudent('Gen111', 1002)) // Expected: -1 (invalid course)
    console.log('-----------------------------------------------------')

    // Test Case 3: Register multiple students for a course
    console.log(cm.registerCourseWithStudents('INT201', [1003, 1005])) // Expected: 5 (students registered)
    console.log(cm.registerCourseWithStudents('INT202', [1003, 1005])) // Expected: 3 (students registered)
    console.log(cm.registerCourseWithStudents('Gen101', [1003, 1005])) // Expected: 2 (students registered)
    console.log('-----------------------------------------------------')

    // Test Case 4: Find course indexes
    console.log(cm.findCourseIndex('INT201')) // Expected: 0 (course found)
    console.log(cm.findCourseIndex('INT202')) // Expected: 1 (course found)
    console.log('-----------------------------------------------------')

    // Test Case 5: Remove courses
    console.log(cm.removeCourse('INT202')) // Expected: 'INT202' (course removed)
    console.log(cm.removeCourse('INT203')) // Expected: 'INT203' (course removed)
    console.log(cm.removeCourse('INT205')) // Expected: -1 (invalid course)
    console.log('-----------------------------------------------------')

    // Test Case 6: Get all courses
    console.log(cm.getCourses()) // Expected: array of remaining courses
    console.log('-----------------------------------------------------')

    // Test Case 7: Get a specific course
    console.log(cm.getCourse('INT201')) // Expected: course object for 'INT201'
    console.log('-----------------------------------------------------')