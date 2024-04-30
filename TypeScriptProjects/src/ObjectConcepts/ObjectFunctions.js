var studentInfo = {
    sName: "manikanta",
    sId: 101,
    sLabMarks: 65,
    sSemMarks: 450,
    total: function () {
        return this.sSemMarks + this.sLabMarks;
    },
    print: function () {
        console.log("name of the student: ".concat(this.sName, " \n\n        and the id is ").concat(this.sId, " scoring marks of labs ").concat(this.sLabMarks, "\n\n        and scoring of final semi exams ").concat(this.sSemMarks, "\n\n        and the total scoring of sem ").concat(this.total(), " "));
    }
};
studentInfo.print();
