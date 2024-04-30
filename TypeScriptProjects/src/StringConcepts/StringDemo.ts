let str1: string = "Hello, ";
let str2: string = 'TypeScript!';
let combinedString: string = str1 + str2;

console.log(combinedString)
console.log(`--------------------------------`)

console.log(`Returns the length of the string`)
let message: string = "Hello, TypeScript!";
let lengthOfString:number = message.length;
console.log(`The length of the String is ${lengthOfString}`) // Returns the length of the string
console.log(`--------------------------------`)
console.log(`Accessing the first character`)
let greeting: string = "Hello";
let firstChar: string = greeting[0];
console.log(`Accessing the first character from string ${firstChar}`) // Accessing the first character
console.log(`--------------------------------`); 

console.log(` Returns "powerful"`)
let sentence: string = "TypeScript is powerful.";
let substring: string = sentence.substring(11, 19); // Returns "powerful"
console.log(`returning the substring from main string= ${substring}`)

console.log(`--------------------------------`); 
console.log("Concatenation: String interpolation")
let nameConcate:string="manikanta"
let messagegreet:string="hello iam sri yuva teja"
console.log(`${messagegreet} ${nameConcate}`)
console.log(`--------------------------------`); 
console.log(`Replacing Substrings`)
let originalString: string = "TypeScript is great!";
let updatedString: string = originalString.replace("great", "awesome");
console.log(updatedString)
console.log(`--------------------------------`); 
let strToArray: string[] = "TypeScript".split(''); // Converts string to array of characters
let arrayToStr: string = ['T', 'y', 'p', 'e', 'S', 'c', 'r', 'i', 'p', 't'].join(''); // Converts array to string
console.log(strToArray)
console.log(arrayToStr)
console.log(`--------------------------------`); 
console.log("charAt(index):")
let text: string = "TypeScript";
let char: string = text.charAt(2); // Returns 'p'
console.log(char)
console.log(`--------------------------------`); 
console.log("Returns Unicode value of 'p'")
let text1: string = "TypeScript";
let unicodeValue: number = text1.charCodeAt(2); // Returns Unicode value of 'p'
console.log(`Returns Unicode value of 'p' ${unicodeValue}`)
console.log(`--------------------------------`); 


















