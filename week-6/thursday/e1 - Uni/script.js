class People {
    static all = [];
    constructor(data) {
        this.born = data.born;
        this.name = data.name;
        this.idNumber = data.idNumber;
    }
}

class Student extends People {
    static all = [];
    constructor(data) {
        super(data);
        this.courses = data.courses;

        Student.all.push(this);
        People.all.push(this);
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
    constructor(data) {
        this.id = data.id;
        this.courseId = data.courseId;
        this.teacher = data.teacher;
        this.year = data.year;

        Offering.all.push(this);
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