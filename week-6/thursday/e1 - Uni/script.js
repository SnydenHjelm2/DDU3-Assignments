class People {
    static all = [];
    static byPnr(pnr) {
        return People.all.filter((x) => {
            let personPnr = x.pnr;
            if (personPnr === pnr) {return true}
            else {return false};
        });
    }
    constructor(data) {
        this.born = data.born;
        this.name = data.name;
        this.idNumber = data.idNumber;
    }
    get age() {
        return 2025 - this.born.year;
    }
    get pnr() {
        if (this.born.month < 10 && this.born.day < 10) {
            return `${this.born.year}0${this.born.month}0${this.born.day}${this.idNumber}`;
        } else if (this.born.month < 10) {
            return `${this.born.year}0${this.born.month}${this.born.day}${this.idNumber}`;
        } else if (this.born.day < 10) {
            return `${this.born.year}${this.born.month}0${this.born.day}${this.idNumber}`;
        } else {
            return `${this.born.year}${this.born.month}${this.born.day}${this.idNumber}`;
        }
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
    get directRate() {
        let studentCourses = this.courses;
        let offeringIDS = studentCourses.map((x) => x.offeringId);
        let offeringsStudentAttended = Offering.all.filter((x) => offeringIDS.includes(x.id));
        let passedSameYear = {passed: 0, failed: 0};
        for (let course of studentCourses) {
            for (let offer of offeringsStudentAttended) {
                if (offer.id === course.offeringId) {
                    if (offer.year === course.g) {passedSameYear.passed++}
                    else {passedSameYear.failed++};
                }
            }
        }
        return ((passedSameYear.passed / (passedSameYear.passed + passedSameYear.failed)) * 100).toFixed(1) + "%";
    }
}

class Teacher extends People {
    static all = [];
    static get hardestWorking() {
        let mostOfferings = {total: 0, teacher: null};
        for (let teacher of Teacher.all) {
            let teacherPnr = teacher.pnr;
            let offeringsByTeacher = Offering.all.filter((x) => x.teacher === teacherPnr);
            
            if (offeringsByTeacher.length > mostOfferings.total) {
                mostOfferings.total = offeringsByTeacher.length;
                mostOfferings.teacher = teacher;
            }
        }
        return mostOfferings;
    }
    static get bestKnown() {
        let obj = {total: 0, teacher: null};

        for (let teacher of Teacher.all) {
            let teacherStudents = 0;
            let teacherOfferings = teacher.courses;
            teacherOfferings = teacherOfferings.map((x) => x.students);
            let allStudentsTeacherHasHad = teacherOfferings.map((x) => x.length);
            let totalStudents = 0;
            for (let num of allStudentsTeacherHasHad) {
                totalStudents += num;
            }

            if (totalStudents > obj.total) {
                obj.total = totalStudents;
                obj.teacher = teacher;
            }
        }

        return obj.teacher;
    }
    constructor(data) {
        super(data);

        Teacher.all.push(this);
        People.all.push(this);
    }
    get courses() {
        let teacherPnr = this.pnr;
        return Offering.all.filter((x) => x.teacher === teacherPnr);
    }
    get years() {
        let allOfferingsByTeacher = this.courses;
        let allYears = allOfferingsByTeacher.map((x) => x.year);
        let yearUsed = [];
        for (let year of allYears) {
            if (yearUsed.includes(year)) {continue};
            yearUsed.push(year);
        }
        return yearUsed.sort((a, b) => a - b);
    }
    get succesRate() {
        let teacherOfferings = this.courses;
        let passedOrNot = {passed: 0, failed: 0};
        for (let offer of teacherOfferings) {
            let studentsInOffering = offer.students;
            for (let student of studentsInOffering) {
                for (let course of student.courses) {
                    if (course.offeringId === offer.id) {
                        if (course.g) {passedOrNot.passed++}
                        else {passedOrNot.failed++};
                        break;
                    }
                }
            }
        }
        return ((passedOrNot.passed / (passedOrNot.passed + passedOrNot.failed)) * 100).toFixed(1) + "%";
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
    get successRate() {
        let offeringsOfCourse = Offering.all.filter((x) => x.courseId === this.id);
        let passedOrNot = {passed: 0, failed: 0};

        for (let offer of offeringsOfCourse) {
            let studentsInOffering = offer.students;

            for (let student of studentsInOffering) {
                for (let course of student.courses) {
                    if (course.offeringId === offer.id) {
                        if (course.g) {passedOrNot.passed++}
                        else {passedOrNot.failed++};
                    }
                }
            }
        }
        return ((passedOrNot.passed / (passedOrNot.passed + passedOrNot.failed)) * 100).toFixed(1) + "%";
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