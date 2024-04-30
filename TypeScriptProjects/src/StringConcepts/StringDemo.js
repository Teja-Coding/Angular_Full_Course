var str1 = "Hello, ";
var str2 = 'TypeScript!';
var combinedString = str1 + str2;
console.log(combinedString);
console.log("--------------------------------");
console.log("Returns the length of the string");
var message = "Hello, TypeScript!";
var lengthOfString = message.length;
console.log("The length of the String is ".concat(lengthOfString)); // Returns the length of the string
console.log("--------------------------------");
console.log("Accessing the first character");
var greeting = "Hello";
var firstChar = greeting[0];
console.log("Accessing the first character from string ".concat(firstChar)); // Accessing the first character
console.log("--------------------------------");
console.log(" Returns \"powerful\"");
var sentence = "TypeScript is powerful.";
var substring = sentence.substring(11, 19); // Returns "powerful"
console.log("returning the substring from main string= ".concat(substring));
console.log("--------------------------------");
console.log("Concatenation: String interpolation");
var nameConcate = "manikanta";
var messagegreet = "hello iam sri yuva teja";
console.log("".concat(messagegreet, " ").concat(nameConcate));
console.log("--------------------------------");
console.log("Replacing Substrings");
var originalString = "TypeScript is great!";
var updatedString = originalString.replace("great", "awesome");
console.log(updatedString);
console.log("--------------------------------");
var strToArray = "TypeScript".split(''); // Converts string to array of characters
var arrayToStr = ['T', 'y', 'p', 'e', 'S', 'c', 'r', 'i', 'p', 't'].join(''); // Converts array to string
console.log(strToArray);
console.log(arrayToStr);
console.log("--------------------------------");
console.log("charAt(index):");
var text = "TypeScript";
var char = text.charAt(2); // Returns 'p'
console.log(char);
console.log("--------------------------------");
console.log("Returns Unicode value of 'p'");
var text1 = "TypeScript";
var unicodeValue = text1.charCodeAt(2); // Returns Unicode value of 'p'
console.log("Returns Unicode value of 'p' ".concat(unicodeValue));
console.log("--------------------------------");
var textDemo = "TypeScript";
var repeatedText = textDemo.repeat(3); // Returns 'TypeScriptTypeScriptTypeScript'
console.log(repeatedText);
