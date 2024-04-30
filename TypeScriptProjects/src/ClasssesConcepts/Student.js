var Student = /** @class */ (function () {
    function Student() {
        this.sId = 101;
        this.sName = "manikanta";
        this.isAcitive = true;
        this.total = 0;
        this.avg = 0;
        this.arMarks = [55, 65, 95, 85];
        this.arCourse = ["css", "html", "javaScript", "java"];
    }
    Student.prototype.DisplayStudentDetails = function () {
        var StudentDetails = "StudentId ".concat(this.sId, "\n name of the student: ").concat(this.sName, "\n and isAcitve status: ").concat(this.isAcitive);
        console.log(StudentDetails);
    };
    Student.prototype.DisplayResults = function () {
        for (var _i = 0, _a = this.arMarks; _i < _a.length; _i++) {
            var items = _a[_i];
            this.total = this.total + items;
        }
        console.log("total is :" + this.total);
        console.log("avg is : " + this.total / this.arMarks.length);
    };
    return Student;
}());
var std = new Student();
std.DisplayStudentDetails();
std.DisplayResults();
