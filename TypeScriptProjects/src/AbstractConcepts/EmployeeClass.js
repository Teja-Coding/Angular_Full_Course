var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EmployeeClass = /** @class */ (function () {
    function EmployeeClass(id, name, salary) {
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
    }
    EmployeeClass.prototype.Display = function () {
        console.log("Employee ID: ".concat(this.empName, "\n Employee Name: ").concat(this.empName, "\n Salary Employee: ").concat(this.empSalary));
    };
    return EmployeeClass;
}());
var TrainerClass = /** @class */ (function (_super) {
    __extends(TrainerClass, _super);
    function TrainerClass(id, name, salary, sub) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.subject = sub;
        return _this;
    }
    TrainerClass.prototype.calSalaray = function (hrs) {
        var salary;
        salary = this.empSalary * hrs + (this.empSalary * hrs) * 2.5 / 100.00;
        console.log("trainer salary is : " + salary);
    };
    TrainerClass.prototype.DisplayTrainerInfo = function () {
        _super.prototype.Display.call(this);
        console.log("subject is : " + this.subject);
    };
    return TrainerClass;
}(EmployeeClass));
var emp = new TrainerClass(101, "maniaknta", 25000, "java");
emp.DisplayTrainerInfo();
emp.calSalaray(25000);
