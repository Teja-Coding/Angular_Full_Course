class EmployeeDemo{
    eId:number;
    ename:string;
    esalary:number;

    constructor(id:number, name:string, salary: number){
        this. eId=id;
        this.ename=name;
        this.esalary=salary;
    }

    Display():void{
        console.log(`Employee ID: ${this.eId}\n Name: ${this.ename}\n Salary: ${this.esalary}`)
    }
    
}

class Trainer extends EmployeeDemo{

    public subject:string;
    constructor(sub:string, id:number,name:string,salary:number){
        super(id,name,salary)
        this.subject=sub
    }

    Display(): void {
        super.Display();
        console.log(`subject is: ${this.subject}`)
    }
}

let object:Trainer=new Trainer("java",101,"manikanta",250000);
object.Display();