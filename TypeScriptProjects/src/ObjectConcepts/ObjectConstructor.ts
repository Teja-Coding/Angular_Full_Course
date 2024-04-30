class car{
    public constructor(public make:string, public model:string){
    }
}

//creating instance of car
let car1=new car("toyota","camry")
let car2=new car("Honda", "Accord")
console.log(car1.make+"----"+car1.model)
console.log(car2.make+"---"+car2.model)