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
var EmployeeDemo = /** @class */ (function () {
    function EmployeeDemo(id, name, salary) {
        this.eId = id;
        this.ename = name;
        this.esalary = salary;
    }
    EmployeeDemo.prototype.Display = function () {
        console.log("Employee ID: ".concat(this.eId, "\n Name: ").concat(this.ename, "\n Salary: ").concat(this.esalary));
    };
    return EmployeeDemo;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(sub, id, name, salary) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.subject = sub;
        return _this;
    }
    Trainer.prototype.Display = function () {
        _super.prototype.Display.call(this);
        console.log("subject is: ".concat(this.subject));
    };
    return Trainer;
}(EmployeeDemo));
var object = new Trainer("java", 101, "manikanta", 250000);
object.Display();
