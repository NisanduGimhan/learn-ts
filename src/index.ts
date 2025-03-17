//type
let myName = "nisandu";
console.log(typeof myName);

//variables
let age: number = 25;
let sutdentName: string = "saman";
let isActive: boolean = true;
let myObject: null = null;
let undefineData: undefined;
let animals: Array<string> = ["dog", "cat", "", ""];
let vehicles: string[] = ["", ""]; //normal Array
let student: { name: string; age: number } = { name: "kamal", age: 25 };

//create interface  like class to create object
interface Animal {
  name: string;
  breed: string;
  age: number;
}

let dog: Animal = { name: "togo", breed: "Husky", age: 1 };
console.log(dog.age);

//Arrays
let numbersArray: number[] = [10, 20, 30, 40];
console.log([0]); //===>10

let stringArray: string[] = ["apple", "cake", "rice"];
stringArray.push("coke"); //add
stringArray.pop(); //rid the last element

//tuple
//A tuple is like an array, but it has a fixed number of elements with specific types.
let studentData: [string, number] = ["saman", 20];

//for-loop
for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}

for (let temp of numbersArray) {
  console.log(temp);
}

//-------------function-----------
function sayHello(message: string): void {
  console.log(`message: ${message}`);
}

sayHello("hello falks!");

//return function
function getAgeAfterThreeYears(age: number, name?: string): number {
  if (name) {
    console.log(`hello ${name}`);
  } else {
    console.log(`hello ${age}`);
  }
  return age + 3;
}

let myAge: number = getAgeAfterThreeYears(25);
let myNewAge: number = getAgeAfterThreeYears(26, "kamal");

//function
const helloIsuru = function (message: string): void {
  console.log(message);
};

helloIsuru("hello gys");

//-----------------------------------
function horekda(name: string, thief?: boolean): void {
  if (thief) {
    console.log(`${name} is horaaaa!`);
  } else {
    console.log(`${name} hondaaai`);
  }
}

horekda("ranil", true);
horekda("anura");

//------------ Rest Parameter Function----------------
function sum(...values: number[]): number {
  let total: number = 0;
  for (let nmbr of values) {
    total += nmbr;
  }
  return total;
}

console.log(sum(10, 20, 30, 40));
