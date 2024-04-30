abstract class EmployeeClass{
    empId:number;
    empName:string;
    empSalary:number;

    constructor(id:number, name: string, salary:number){
        this.empId=id;
        this.empName=name;
        this.empSalary=salary;
    }

    Display(){

        console.log(`Employee ID: ${this.empName}\n Employee Name: ${this.empName}\n Salary Employee: ${this.empSalary}`)
    }
    abstract calSalaray(hrs:number);
}

class TrainerClass extends EmployeeClass{

    public subject:string;
    constructor(id:number,name:string,salary:number,sub:string){
        super(id,name,salary);
        this.subject=sub;
    }

    calSalaray(hrs: number) {
        let salary:number;
        salary=this.empSalary*hrs+(this.empSalary*hrs)*2.5/100.00;

        console.log("trainer salary is : "+ salary)
    }

    DisplayTrainerInfo():void{
        super.Display();
        console.log("subject is : "+this.subject)
    }

}

var emp:TrainerClass = new TrainerClass(101,"maniaknta",25000,"java");

emp.DisplayTrainerInfo();
emp.calSalaray(25000);