// console.log("js let vs var vs const");
// var is used to defined globally and can be changed anywhere in the program
var a = "Hi";
var b = 90;
var c = undefined;
var d = null;
// creating a block in javaScript
console.log("the var type variable");
console.log("value before changed,outside the block var a = " + a);
{
  var a = "Uday"; //the value of a now change globally
  console.log("value after changed,inside the block var a = " + a);
}
console.log("value after changed,outside the block var a = " + a);

console.log("\n This is the reason why the var keyword is not recommended to be used anymore. It can lead to unexpected results. Instead we make use of the let and const keywords.\n");
// let 
console.log("the let type variable");
let name = "hello", age = 19;
console.log("value before changed,outside the block var a = " + name);
{
  let name = "world"; // re-declared value within the block
  console.log("value after changed,inside the block var a = " + name);
}
console.log("value before changed,outside the block var a = " + name);
//  const
console.log("\nthe const type variable \n The const keyword is used to declare variables in JavaScript and is used when you don't want to reassign the variable. The value of a variable declared with const cannot be changed.");
const myname = "Sharma";
console.log(myname);
myname = "this";
console.log(myname); //output: Uncaught TypeError: Assignment to constant variable.
