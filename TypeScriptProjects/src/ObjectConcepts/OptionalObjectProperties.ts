// Optional object properties
interface Person {
    name: string;
    age?: number;
  }
  
  let person1: Person = { name: "Alice" };
  let person2: Person = { name: "Bob", age: 25 };
  
  console.log(person1); // Output: { name: 'Alice' }
  console.log(person2); // Output: { name: 'Bob', age: 25 }
  