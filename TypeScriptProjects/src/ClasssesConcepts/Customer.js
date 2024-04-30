var Customer = /** @class */ (function () {
    function Customer() {
    }
    //method
    Customer.prototype.DisplayInfo = function () {
        this.custName = "manikanta";
        this.custId = 101;
        this.custBal = 50000;
    };
    //function
    Customer.prototype.Display = function () {
        var msg = "Customer id: ".concat(this.custId, "\n Customer Name: ").concat(this.custName, "\n balance of the custmer ").concat(this.custBal);
        return msg;
    };
    //get total value
    Customer.prototype.getTotalValue = function (proCost, qty) {
        return proCost * qty;
    };
    return Customer;
}());
//object
var cust = new Customer();
cust.DisplayInfo();
var dis = cust.Display();
console.log(dis);
var totalValue = cust.getTotalValue(3000, 2);
console.log("the value of the card: ".concat(totalValue));
