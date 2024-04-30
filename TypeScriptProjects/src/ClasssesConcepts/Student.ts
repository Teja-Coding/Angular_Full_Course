class Student{
    sId:number=101;
    sName:String="manikanta"
    isAcitive:boolean=true
    total:number=0
    avg:number=0;


    arMarks:Array<number>=[55,65,95,85]
    arCourse:string[]=["css","html","javaScript","java"]

    DisplayStudentDetails(){
        let StudentDetails:string=`StudentId ${this.sId}\n name of the student: ${this.sName}\n and isAcitve status: ${this.isAcitive}`
        console.log(StudentDetails)
    }

    DisplayResults(){
        for(var items of this.arMarks){
            this.total = this.total+items
        }
        console.log("total is :"+ this.total)
        console.log("avg is : "+this.total/this.arMarks.length)
    }

}
var std:Student= new Student();
std.DisplayStudentDetails()
std.DisplayResults()
