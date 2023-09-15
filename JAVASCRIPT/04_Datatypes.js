//---------------------Primitive datatype-------------------------//
console.log("Primitives In JavaScript \nthere are 7 primitive data types. The primitive data types are fundamental data types that are built into JavaScript. A good trick to remember these 7 data types is (NNSSBBU):\nN - null\nN - number\nS - symbol\nS - string\nB - boolean\nB - bigint\nU - undefined");
let a = null;
let b = 123;
let c = true;
let d = BigInt("567");
let e = "Uday";
let f = Symbol("i am a Symbol");
let g = undefined; // varible is undefined by default
// printing all the datatypes
console.log(a, b, c, e, d, f, g);
// finding the type of each primitive datatype
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
// Null and undefined
let nullvar = null; // value is defined by the user
let undefiendvar; // varible is undefined by default
// ---------------------Number-------------------------//
let n = 123, m = 45.12;
// infinity
console.log(1 / 0); // infinity
console.log(Infinity); // Infinity;
// NaN
console.log("Not a Number" / 2); // NaN
console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN
console.log("not a number" / 2 - 1); // NaN
//---------------------BigInt-------------------------//
let bigintvar = 9007199254740991;
console.log(bigintvar + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
//---------------------Strings-------------------------//
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
let name = "Uday Sharma";
console.log(name);
console.log(`Embed a variable ${name}`); //Uday Sharma
console.log(`Embed a variable ${5 + 8}`);  // 13
//---------------------Boolean-------------------------//
let boolTruevar = true;
let boolFalsevar = false;
//---------------------objects-------------------------//
//  Objects in js  // Non-primitive datatypes in js
// We can make Key value pair , Look-up or mapping
console.log("objects in javascript");
// we called this object and in other language its knows as python
const items = {
  "Uday": true, "Anshul": 69, "Yash": false, "Sharma": undefined
}
console.log(items["Uday"]);  // get the value of Uday
console.log(items["Anshul"]);
console.log(items["Yash"]);
console.log(items["Sharma"]);
//---------------------objects Example-2-------------------------//
let user={};   // Create a Objects
user.name = "Uday Sharma "; // adding properties
user.age = 20 ;
user.branch = "CSE";
console.log(user.name);  // accessing the properties
console.log(user.age);
console.log(user.branch);
console.log(user);  // print whole user 

let  myDsec = {  // Create a Objects with properties
    name : "Uday",
    age:20,
    branch : "CSE"
}
console.log(myDsec);
myDsec.degree = "B.tech"; // assigning new property 
console.log(myDsec);    