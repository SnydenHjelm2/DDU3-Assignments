Studera databasens "entiteter", dvs objekten som finns i konstanterna COURSES, STUDENTS. TEACHERS och OFFERINGS, och vilka egenskaper de har. (I databasen finns det alltså fyra entiteter: Courses, Students, Teachers och Offerings).

OBS
"Offerings" är som "kursomgångar". Alltså DU3 är en kurs och ni läser omgången DU3-2025.

Studenter har egenskapen courses, som beskriver vilka kurser de har läst och om de har klarat av dem.
"courses": [
    {
        "offeringId": 279240,   // Vilken kursomgång studenten har läst
        "g": false              // inte klarat av den ännu
    },
    {
        "offeringId": 563329,
        "g": 2022               // klarade av den året 2022. Behöver inte vara samma år som kursomgången gick
                                // Om det inte är samma år => klarade en omtenta (detta stämmer inte 
                                    med verkligheten men är enklare att hantera).
    },
    {
        "offeringId": 665168,
        "g": 2019
    }
]


Målet är att skapa en kodbas som hjälper oss analysera resultat.
Du ska skapa classer som motsvarar dessa entiteter.
Alltså klasser som sparar datan som ingår i entiteterna (dvs har samma egenskaper).
Så tex:
class Course {
  constructor (data) {
    this.id = data.id;
    this.name = data.name;
    this.credits = data.credits;
    this.semester = data.semester;
    this.subject = data.subject;
  }
}

Notera att Student och Teacher båda ska extenda Person, som innehåller allt som är gemensamt för Student och Teacher.


** Mindre svåra frågor **
Utöver dessa grundläggande egenskaper ska följande getters fixas:
Course
  static all = []
  static byId (id) returnerar kursen som har den id
  static get mostStudents returnerar kursen som har haft mest studenter (i alla dess omgångar) 
  
  get students (alla studenter som har läst någon omgång av kursen)

Offering
  static all = []
  static byId (id) returnerar omgången som har den id

  get students (alla studenter som har läst denna omgång)
  get successRate (% av studenterna som har klarat omgången)

Person
  static all = []
  static byPnr (id) returnerar personen som har det pnr

  get age (returnerar åldern, beräkningen förenklad till 2025 - året då personen föddes)
  get pnr (returnerar YYYYMMDDIIII, precis som våra pnr)

Student extends Person
  static get byAge (returnerar alla studenter, sorterade efter födelsedatum, äldst först)
  
  get totalCredits (returnerar antalet hp som studenten har läst)
  get totalCreditsPassed (returnerar antalet hp som studenten har klarat av)
  get allPassed (returnerar true om studenten har klarat av alla sina kurser, false annars)
  
Teacher extends Person
  static get hardestWorking (returnerar läraren som har hållit i de flesta kursomgångar)

  get courses (returnerar alla kursomgångar som läraren har hållit)
  get years (returnerar alla år då läraren har hållit en kursomgång)




Andra getters att jobba med:
Teacher
  static get bestKnown (returnerar läraren som har haft flest studenter)
  
  get successRate (returnerar % av studenterna som har klarat av lärarens kursomgångar)

Course
  get successRate (% av studenter som har klarat kursens alla omgångar)

Student
  get directRate (% av kursomgångar som hen har klarat av samma år – alltså inte via omtenta)

