class Employee{
    empId:number;
    empName:string;
    empSalary:number

    // constructor(){
    //     this.empId=101;
    //     this.empName="maniaknta";
    //     this.empSalary=45100;
    // }

    constructor(id:number, name:string, salary:number){
        this.empId=id;
        this.empName=name;
        this.empSalary=salary;
    }


    DisplayEmp():string{
        let msg:string=`The name of the emp is ${this.empName}\n and the id: ${this.empId}\n and the salary is ${this.empSalary}`
        return msg;
    }
}

let infoDisplay:Employee=new Employee(102,"teja",45000);
let msgInfo:string=infoDisplay.DisplayEmp();
console.log(msgInfo)



