// var num = -20;
// console.log(num)
// if (num > 0){
//     console.log('The number is positive')
// }
// else if (num === 0){
//     console.log('The number is zero.')
// }
// else{
//     console.log('The number is Negative')
// }


// let day = 6;

// switch (day) {
//   case 1: console.log("Sunday"); break;
//   case 2: console.log("Monday"); break;
//   case 3: console.log("Tuesday"); break;
//   case 4: console.log("Wednesday"); break;
//   case 5: console.log("Thursday"); break;
//   case 6: console.log("Friday"); break;
//   case 7: console.log("Saturday"); break;
//   default: console.log("Invalid day number");
// }

// let student = {
//   name: "Mizash",
//   age: 24,
//   grade: "A"
// };

// function displayStudentDetails(stu) {
//   console.log(`Name: ${stu.name}, Age: ${stu.age}, Grade: ${stu.grade}`);
// }

// displayStudentDetails(student);
// student.address = "Kathmandu, Nepal";
// console.log(student);

// let numbers = [10, 25, 30, 5, 12];
// let largest = Math.max(...numbers);
// console.log("Largest Number:", largest);

// let fruits = ["Apple", "Banana", "Mango"];
// fruits.push("Orange");    
// fruits.shift();            
// console.log(fruits);

// let countryMap = new Map();
// countryMap.set("Nepal", "Kathmandu");
// countryMap.set("India", "New Delhi");
// countryMap.set("Japan", "Tokyo");

// for (let [country, capital] of countryMap) {
//   console.log(country, "→", capital);
// }

// console.log(countryMap.has("Nepal")); 

// let nums = [1, 2, 3, 3, 4, 5, 5];
// let uniqueSet = new Set(nums);
// console.log(uniqueSet);
// uniqueSet.add(6);
// console.log(uniqueSet.has(6));

// function divide(a, b) {
//   try {
//       if (b === 0) throw new Error('Denominator cannot be zero.');
//       console.log("Result:", a / b);
//   } catch (err) {
//     console.log("Error:", err.message);
//   }
// }

// divide(20, 0);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let merged = [...arr1, ...arr2];
// console.log(merged);

let obj1 = { name: "Mizash", age: 24 };
let obj2 = {...obj1, country: "Nepal" };
console.log(obj2);

// let person = { name: "Mizash", age: 24, country: "Nepal" };

// // for...in
// for (let key in person) {
//   console.log(key, ":", person[key]);
// }

// // forEach
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(num => console.log(num));

// // for loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// function addNumbers(a, b) {
//   return a + b;
// }

// console.log("Sum:", addNumbers(5, 7));

// let numbersArr = [1, 2, 3, 4];
// let doubled = numbersArr.map(num => num * 2);
// console.log(doubled);