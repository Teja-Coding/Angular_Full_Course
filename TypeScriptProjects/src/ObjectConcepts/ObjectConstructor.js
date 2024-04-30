var car = /** @class */ (function () {
    function car(make, model) {
        this.make = make;
        this.model = model;
    }
    return car;
}());
//creating instance of car
var car1 = new car("toyota", "camry");
var car2 = new car("Honda", "Accord");
console.log(car1.make + "----" + car1.model);
console.log(car2.make + "---" + car2.model);
