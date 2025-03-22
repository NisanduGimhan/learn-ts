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



