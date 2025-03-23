//type
let myName = "nisandu";
console.log(typeof myName);  //  ----> String

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

//----------With Argument Function---------------|
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

//----------Object---------------->
         //LITERALS  -In JavaScript, object literals are created using
         //            curly braces {} to define key-value pairs{..,..,..,..,..}
         
const studentIcet={
  name:'mahinda',
  age:90,
  address:{
    city:'kalutara',
    postal:12500
  }
};

console.log(studentIcet);
console.log(studentIcet.name);
console.log(studentIcet.address.city);


         //interface
  
  interface Studnet{
    name:string;
    age:number;
    address:{
           city:string;
           postal:number;
    }
  }   
  
  const studentx:Studnet={
    name:'Raman',
    age:90,
    address:{
      city:'Jaffna',
      postal:14400
    }
  };
  
console.log(studentx);
console.log(studentx.name);
console.log(studentx.address.city);

  
       // Using class

class Student {

  name:string;
  age:number;
  address:{
    city:string;
    postal:number;
  }
  constructor(name:string,age:number,address:{city:string,postal:number}){
                  this.name=name;
                  this.age=age;
                  this.address=address;
  }

}

const studentt=new Student('malan',12,{city:'panadura',postal:12500});
console.log(studentt);

         //using encapsulation class
  
  class Dog{
    private name:string;
    private age:number;

    constructor(name:string,age:number){
      this.age=age;
      this.name=name;
    }

    public setAge(age:number){
            if(age<0){
              return;
            }
          this.age=age;
    }
  }

  const d1=new Dog('Bundi',2);
      //d1.age=3;   cannot access coze it's private
  d1.setAge(3);


// Feature	                     Interface	                    Class

// Defines structure?	           ✅ Yes	                      ✅ Yes
// Provides implementation?	     ❌ No	                        ✅ Yes
// Can have constructors?        ❌ No	                        ✅ Yes
// Can instantiate with new?	   ❌ No	                        ✅ Yes
// Supports methods?	           ❌ Only method signatures	    ✅ Full method implementation
// Used for?                     Type-checking                 	Object creation & logic


// Which One to Use?
// 🔹 Use an interface when you only need to define a type without logic.
// 🔹Use a class when you need both a type and implementation (e.g., constructors, methods, inheritance).

         

// -----------Read-Only and Optional--------------

//  **😊Read-Only***
// 🔹this can use in interface and class if u Want. so When you want constant properties in classes (e.g., readonly id in a user model),
// When you need immutable objects in interfaces can use readonly.
// 🔹In TypeScript, the readonly keyword ensures that a property cannot be reassigned after initialization.

//  **😊Optional***
// 🔹In TypeScript, the ? (optional) operator makes a property optional in an interface or a class. 
// 🔹This means the property may or may not be present in an object.

interface AnimalInForest{
  nameofAnimal:string;
  ageofAnimal?:number;  //optional
  readonly isActive:boolean; //read-only
}

//Used Read-only
const a2:AnimalInForest={
  nameofAnimal:'Dog',
  ageofAnimal:10,
  isActive:false
}
//a1.isActive=false;   cannot be reassigned after initialization 

//Used optional
const a1:AnimalInForest={
  nameofAnimal:'Dog',
  isActive:true
}


// -----------------inheritance------------------

interface Person{
  name:string;
  age:number;
  canEnglish:boolean;
}

interface Ranil extends Person{
  horekda:boolean;
}

interface Anura extends Person{
}

const ranil: Ranil={name:'ranil',age:92,horekda:true,canEnglish:true}
const anura: Anura={name:'anura',age:92,canEnglish:true}


// ------------fully implemented class for show inheritance------------
class Animall{
  name:string;
  age:number;

  constructor(name:string,age:number){
    this.name=name;
    this.age=age;
  }

  sound():void{
    console.log(`${this.name} sound..`);
  }
}

class Dogg extends Animall{
  bread:string;

  constructor(name:string,age:number,bread:string){
    super(name,age);
    this.bread=bread;
    
  }
}

let animal=new Animall('animal',10);
let dogg=new Dogg('Dog',10,'husky');

animal.sound();//animal sound..
dogg.sound();//dog sound..


//---------------Abstract-----------------
// 🔹abstract also work as java.if method was abstract class must be abstarct


//-----------------------Generics-----------------------------
// 🔹Generics allow you to create reusable components that work with different types instead of just one.

// 😊Without Generics
// A function that returns the first item of an array, but only for strings:


function getFirstString(arr: string[]): string {
  return arr[0];
}

let names = ["Alice", "Bob", "Charlie"];
console.log(getFirstString(names));  // Alice
// *****But what if we want it to work for numbers too?

// 😊With Generics

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

let numbers = [10, 20, 30];
console.log(getFirst(numbers));  // 10

let words = ["hello", "world"];
console.log(getFirst(words));  // hello

//✅ Here, <T> is a placeholder for any type (like string, number, etc.), making the function reusable.


// 😊Generic Interfaces
interface Box<T> {
  value: T;
}

let numberBox: Box<number> = { value: 100 };
let stringBox: Box<string> = { value: "Hello" };

console.log(numberBox.value);  // 100
console.log(stringBox.value);  // Hello



// ----------------try-catch with async/await-----------


// 🔹 Why Use try-catch?
//1. Prevents Program Crashes 🚫💥
//  If an exception occurs, instead of stopping execution, the catch block handles it, allowing the program to continue running.

//2. Improves Debugging 🛠️
// We can log errors and understand what went wrong rather than getting an unexpected crash.

//3. Enhances User Experience 🎭
// Instead of showing a scary error message, we can provide a friendly error message (e.g., "Something went wrong, please try again!").

//4. Allows Error Recovery 🔄
// If an operation fails (like a failed API call), we can try an alternative approach in the catch block.

//5. Mandatory for Checked Exceptions (Java) ⚠️
// In Java, some exceptions (like IOException) must be handled using try-catch or declared with throws.
                   


                                // ✅Use try to wrap risky code.

                                // ✅Use catch to handle errors.

                                // ✅Use finally (optional) to execute code regardless of whether an error occurred
                                // (e.g., closing a file or database connection).

async function fetchDatax() {
  try {//try
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {//catch
    console.error("Failed to fetch data:", (error as Error).message);
  }
}

fetchDatax();




// -------------------------------🔹 Understanding Async/Await and Try-Catch-----------------------------------


// When working with asynchronous (async) code in JavaScript/TypeScript,
// we often deal with things like fetching data from an API or reading a file. 
// Since these tasks take time, we use async/await to handle them cleanly.
// However, sometimes things go wrong (e.g., no internet, wrong API URL), and errors occur.
// That’s why we wrap async code inside a try-catch block to catch and handle errors properly.

// 🔹 Breaking Down the Code

async function fetchDatae() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", (error as Error).message);
  }
}

fetchDatae();


// 🔸 Step-by-Step Explanation

                // 1️⃣ Declaring an Async Function

/*async function fetchData() {*/
// The async keyword means this function will handle asynchronous tasks.
// Inside this function, we will use await to pause execution until a promise resolves.

                // 2️⃣ Fetching Data from an API

/* let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");*/

// fetch() is used to get data from a remote server (API).
// The await keyword makes JavaScript wait until the API responds.
// If the API is slow or fails, it could cause an error.

               // 3️⃣ Converting the Response to JSON

/*let data = await response.json();*/

// API responses come in a format called JSON (JavaScript Object Notation).
// We use response.json() to convert it into a JavaScript object.

                // 4️⃣ Handling Errors with Try-Catch

try {
  // Code that might fail goes here
} catch (error) {
  console.error("Failed to fetch data:", (error as Error).message);
}
// If something goes wrong (e.g., bad internet, wrong API URL), the code inside try fails.
// The catch block captures the error and prevents the app from crashing.
// (error as Error).message ensures TypeScript knows error is an Error object.

                     // 5️⃣ Calling the Function

/*fetchData();*/
// This runs our fetchData function and starts fetching data.




// ---------------------------What is Asynchronous Code?----------------------------------------------------------


// In JavaScript/TypeScript, some tasks take time to complete. For example:

// Downloading a file

// Fetching data from the internet

// Reading a database

// If JavaScript waits for these tasks before moving to the next line, the app will become slow and unresponsive. To avoid this, we use asynchronous (async) code, which lets JavaScript do other things while waiting for a task to complete.

// 🔹 What is async and await?
// 🔸 async - Makes a function handle asynchronous tasks.
// 🔸 await - Pauses the function until the task is complete.

// Example:


async function fetchDatay() {
  console.log("1️⃣ Start fetching...");
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log("2️⃣ Response received!");
}
fetchDatay();
console.log("3️⃣ This prints while waiting...");
// Expected Output:

// 1️⃣ Start fetching...
// 3️⃣ This prints while waiting...  ✅ (doesn't wait for fetch)
// 2️⃣ Response received!  ✅ (fetch completes)
// 👉 JavaScript doesn't stop running the rest of the code! The function waits for the fetch to finish, but the program keeps going.

// 🔹 What is fetch()?
// 🔸 fetch(url) is a built-in function that requests data from a server (API).
// 🔸 It returns a "promise", meaning it will get the data in the future.
// 🔸 Since it's asynchronous, we use await to pause the function until the data comes back.

// 🔹 Fetching Data from an API

async function fetchDatau() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let data = await response.json();
  console.log(data);
}
fetchDatau();
// 🔸 Step-by-Step Explanation
// 1️⃣ fetch("URL") → Sends a request to get data from a website.
// 2️⃣ await response.json() → Converts the data from text format to a JavaScript object.
// 3️⃣ console.log(data) → Prints the data to the screen.

// 🔹 What is an API?
// An API (Application Programming Interface) is a service that allows your app to get data from a server.
// For example, "https://jsonplaceholder.typicode.com/posts/1" is a fake API that returns:


// {
//   "userId": 1,
//   "id": 1,
//   "title": "Example Post",
//   "body": "This is an example post."
// }
// This is like asking a restaurant for food:

// You (your app) request food (data).

// The restaurant (API) prepares it.

// You receive your food (JSON data).

// 🔹 What If the API is Slow or Fails?
// If the API takes too long or fails (e.g., no internet), JavaScript will wait forever.
// To prevent this, we handle errors using try-catch:


async function fetchDataxx() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", (error as Error).message);
  }
}
fetchDataxx();
// ✅ If successful: It prints the data.
// ❌ If the API fails: It prints "Failed to fetch data" instead of crashing.

// 🔹 Summary
// ✅ fetch(url) gets data from the internet.
// ✅ async functions allow us to handle async code.
// ✅ await pauses execution until data arrives.
// ✅ Use try-catch to handle API failures.


