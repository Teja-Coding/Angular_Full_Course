var Employee = /** @class */ (function () {
    // constructor(){
    //     this.empId=101;
    //     this.empName="maniaknta";
    //     this.empSalary=45100;
    // }
    function Employee(id, name, salary) {
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
    }
    Employee.prototype.DisplayEmp = function () {
        var msg = "The name of the emp is ".concat(this.empName, "\n and the id: ").concat(this.empId, "\n and the salary is ").concat(this.empSalary);
        return msg;
    };
    return Employee;
}());
var infoDisplay = new Employee(102, "teja", 45000);
var msgInfo = infoDisplay.DisplayEmp();
console.log(msgInfo);
