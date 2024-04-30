let total=(...nums:number[]):number=>{
    return nums.reduce((prev, curr)=>prev+curr)
}
console.log(total(5,10,9,7,85,100,64))
