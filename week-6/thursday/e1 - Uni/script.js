class People {
    static all = [];
    constructor(data) {
        this.born = data.born;
        this.name = data.name;
        this.idNumber = data.idNumber;
    }
    get age() {
        return 2025 - this.born.year;
    }
}

class Student extends People {
    static all = [];
    static get byAge() {
        let sortedStudents = Student.all.sort((a, b) => a.born.day - b.born.day);
        sortedStudents.sort((a, b) => a.born.month - b.born.month);
        sortedStudents.sort((a, b) => a.born.year - b.born.year);
        return sortedStudents
    }
    constructor(data) {
        super(data);
        this.courses = data.courses;

        Student.all.push(this);
        People.all.push(this);
    }
    get totalCredits() {
        let studentCourses = this.courses;

        let offeringsStudentAttended = [];
        studentCourses.forEach((x) => {
            for (let offering of Offering.all) {
                if (x.offeringId === offering.id) {
                    offeringsStudentAttended.push(offering);
                }
            }
        });
        let coursesStudentAttended = [];
        offeringsStudentAttended.forEach((x) => {
            for (let course of Course.all) {
                if (course.id === x.courseId) {
                    coursesStudentAttended.push(course);
                }
            }
        });
        let courseCredits = coursesStudentAttended.map(x => x.credits);
        let total = 0;
        courseCredits.forEach((x) => {
            total += x;
        });
        return total;
    }
    get totalCreditsPassed() {
        let studentCourses = this.courses;
        studentCourses = studentCourses.filter((x) => x.g);
        let offeringsStudentPassed = [];
        studentCourses.forEach((x) => {
            for (let offering of Offering.all) {
                if (x.offeringId === offering.id) {
                    offeringsStudentPassed.push(offering);
                }
            }
        });
        let coursesStudentPassed = [];
        offeringsStudentPassed.forEach((x) => {
            for (let course of Course.all) {
                if (course.id === x.courseId) {
                    coursesStudentPassed.push(course);
                }
            }
        });
        coursesStudentPassed = coursesStudentPassed.map(x => x.credits);
        let total = 0;
        coursesStudentPassed.forEach((x) => {
            total += x;
        });
        return total;
    }
    get allPassed() {
        return !this.courses.some((x) => x.g === false);
    }
}

class Teacher extends People {
    static all = [];
    constructor(data) {
        super(data);

        Teacher.all.push(this);
        People.all.push(this);
    }
}

class Offering {
    static all = [];
    static byId(id) {
        return Offering.all.find((x) => x.id === id);
    }
    constructor(data) {
        this.id = data.id;
        this.courseId = data.courseId;
        this.teacher = data.teacher;
        this.year = data.year;

        Offering.all.push(this);
    }
    get students() {
        let studentsInOffering = [];
        Student.all.forEach((x) => {
            for (let course of x.courses) {
                if (course.offeringId === this.id) {studentsInOffering.push(x)};
            }
        });

        return studentsInOffering;
    }
    get successRate() {
        let allStudents = this.students;
        let studentResultInOffering = [];
        allStudents.forEach((x) => {
            for (let course of x.courses) {
                if (course.offeringId === this.id) {studentResultInOffering.push({student: x, g: course.g})};
            }
        });
        let gOrNot = {g: 0, ug: 0};
        studentResultInOffering.forEach((x) => {
            if (!x.g) {gOrNot.ug++}
            else {gOrNot.g++};
        });
        
        return ((gOrNot.g / (gOrNot.g + gOrNot.ug)) * 100).toFixed(1) + "%";
    }
}

class Course {
    static all = [];
    static byId(id) {
        return Course.all.find((x) => x.id === id);
    }
    static get mostStudents() {
        let arrOfferingsStudents = [];
        for (let course of Course.all) {
            let offeringsOfCourse = Offering.all.filter((x) => x.courseId === course.id);

            offeringsOfCourse.forEach((off) => {
                let studentsInOffering = 0;
                for (let student of Student.all) {
                    for (let stuCourse of student.courses) {
                        if (off.id === stuCourse.offeringId) {
                            studentsInOffering++
                        }
                    }
                }
                arrOfferingsStudents.push({total: studentsInOffering, offering: off});
            });
        }
        
        let totalStudentsByCourse = [];
        for (let obj of arrOfferingsStudents) {
            let totalStudents = obj.total;
            for (let obj2 of arrOfferingsStudents) {
                if (obj.offering.id === obj2.offering.id) {
                    continue;
                } else if (obj.offering.courseId === obj2.offering.courseId) {
                    totalStudents += obj2.total;
                }
            }
            totalStudentsByCourse.push({courseId: obj.offering.courseId, total: totalStudents});
        }
        let result = [];
        let courseIds = [];
        for (let obj of totalStudentsByCourse) {
            if (!courseIds.includes(obj.courseId)) {
                courseIds.push(obj.courseId);
                result.push(obj);
            }
        }
        result.sort((a, b) => b.total - a.total);
        //104136
        for (let course of Course.all) {
            if (course.id === result[0].courseId) {return course};
        }
    }
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.credits = data.credits;
        this.semester = data.semester;
        this.subject = data.subject;

        Course.all.push(this);
    }

    get students() {
        let offeringsOfCourse = Offering.all.filter((x) => x.courseId === this.id);
        let studentsInThisCourse = [];
        offeringsOfCourse.forEach((x) => {
            for (let student of Student.all) {
                for (let course of student.courses) {
                    if (course.offeringId === x.id) {studentsInThisCourse.push(student)};
                    break;
                };
            }
        });

        return studentsInThisCourse;
    }
}

for (let c of COURSES) {
    new Course(c);
}
for (let o of OFFERINGS) {
    new Offering(o);
}
for (let s of STUDENTS) {
    new Student(s);
}
for (let t of TEACHERS) {
    new Teacher(t);
}