interface Ipersion{
    fistName:string
    lastName:string
    age:number
    fullName():string;
    getAge():number;
}

class personDetails implements Ipersion{

    fistName: string;
    lastName: string;
    age: number;
    fullName(): string {
        return this.fistName+" "+this.lastName
    }
    getAge(): number {
        return this.age;
    }

    constructor(fname:string, lname:string,age:number){
        this.fistName = fname;
        this.lastName=lname;
        this.age=age;
    }
}
    let personObj = new personDetails("sir","yuva",25);

    console.log("Name: "+personObj.fullName());
    console.log("age: "+personObj.getAge());

