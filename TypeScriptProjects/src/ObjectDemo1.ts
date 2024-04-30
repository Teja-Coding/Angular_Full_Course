let tv1:{pName:string,price:number,qty:number,total:any,print:any,cities:string[],rating:{Rate:number,count:number}}={

    pName:"apple tv",

    price:100000.00,

    qty:2,

    cities:["tanuku","penumantra"],

    rating:{Rate:4.3,count:5500},

    total:function totalFucntion(){
        return this.price * this.qty
    },

    print:function(){
        console.log(`name of the product ${this.pName}\n price of the product ${this.price}\n total number of product
        ${this.qty}\n total price of both the product ${this.total()}\n from the cities ${this.cities[0]}\n and rating is ${this.rating.Rate}\n with count of ${this.rating.count}  `)
    }
}
tv1.print()
