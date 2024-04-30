 let students:{"name":string, "age":number}[]=[
    {
        "name":"manikanta",
        "age":25
    },
    {
        "name":"yuva",
        "age":25
    }
 ]
 for(var student of students){
    console.log(`${student.name} == ${student.age}`)
 }