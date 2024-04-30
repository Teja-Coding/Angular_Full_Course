class Customer{

    custId:number;
    custName:string;
    custBal:number;

    //method
    DisplayInfo():void{
        this.custName="manikanta";
        this.custId=101;
        this.custBal=50000;
    }

    //function
    Display():string{
        let msg:string=` Customer id: ${this.custId}\n Customer Name: ${this.custName}\n balance of the custmer ${this.custBal}`
        return msg;
    }

    //get total value
    getTotalValue(proCost:number,qty:number):number{
        return proCost*qty

    }
}

//object
let cust:Customer=new Customer();
cust.DisplayInfo()

let dis:string=cust.Display()
console.log(dis)

let totalValue:number=cust.getTotalValue(3000,2);
console.log(`the value of the card: ${totalValue}`)