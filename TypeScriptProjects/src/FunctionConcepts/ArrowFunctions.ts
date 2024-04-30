//arrow function with return type...
let add=(a: number , b: number):number=>{
    return a+b;
}
console.log(add(50,50))

//arrow function without return type keyword void
let msg =(message:any):void=>{
    console.log(`hi all how are iam sri yuva teja ${message}`)
}

console.log(msg("manikanta")) 