var total = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (prev, curr) { return prev + curr; });
};
console.log(total(5, 10, 9, 7, 85, 100, 64));
