let studentInfo:{sName:string, sId:number,sLabMarks:number,sSemMarks:number,total:any,print:any}={

    sName:"manikanta",
    sId:101,
    sLabMarks:65,
    sSemMarks:450,
    total:function(){
        return this.sSemMarks + this.sLabMarks;
    },
    print:function(){
        console.log(`name of the student: ${this.sName} \n
        and the id is ${this.sId} scoring marks of labs ${this.sLabMarks}\n
        and scoring of final semi exams ${this.sSemMarks}\n
        and the total scoring of sem ${this.total()} `)
    }
}
studentInfo.print()