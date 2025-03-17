//type
let myName='nisandu';
console.log(typeof myName);

//variables
let age:number=25;
let sutdentName :string="saman";
let isActive:boolean=true;
let myObject:null=null;
let undefineData:undefined;
let animals:Array<string>=['dog','cat','',''];
let vehicles:string[]=['','',];//normal Array
let student:{name:string,age:number}={name:'kamal',age:25};

//create interface  like class to create object
interface Animal{
    name:string;
    breed:string;
    age:number;
}

let dog: Animal={name:'togo',breed:'Husky',age:1}
console.log(dog.age);

//return function
function getAgeAfterThreeYears(age:number,name?:string):number{
   if(name){
    console.log(`hello ${name}`);
   }else{
    console.log(`hello ${age}`);
   }
   return age+3;
}

let myAge:number=getAgeAfterThreeYears(25);
let myNewAge:number=getAgeAfterThreeYears(26,'kamal');




