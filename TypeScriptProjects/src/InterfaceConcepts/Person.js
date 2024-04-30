var personDetails = /** @class */ (function () {
    function personDetails(fname, lname, age) {
        this.fistName = fname;
        this.lastName = lname;
        this.age = age;
    }
    personDetails.prototype.fullName = function () {
        return this.fistName + " " + this.lastName;
    };
    personDetails.prototype.getAge = function () {
        return this.age;
    };
    return personDetails;
}());
var personObj = new personDetails("sir", "yuva", 25);
console.log("Name: " + personObj.fullName());
console.log("age: " + personObj.getAge());
