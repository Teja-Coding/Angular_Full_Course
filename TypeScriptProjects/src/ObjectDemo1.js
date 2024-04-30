var tv1 = {
    pName: "apple tv",
    price: 100000.00,
    qty: 2,
    cities: ["tanuku", "penumantra"],
    rating: { Rate: 4.3, count: 5500 },
    total: function totalFucntion() {
        return this.price * this.qty;
    },
    print: function () {
        console.log("name of the product ".concat(this.pName, "\n price of the product ").concat(this.price, "\n total number of product\n        ").concat(this.qty, "\n total price of both the product ").concat(this.total(), "\n from the cities ").concat(this.cities[0], "\n and rating is ").concat(this.rating.Rate, "\n with count of ").concat(this.rating.count, "  "));
    }
};
tv1.print();
