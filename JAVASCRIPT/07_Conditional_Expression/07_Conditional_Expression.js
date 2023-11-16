// Conditional Expression 
let name = prompt("Enter Your name : ");
alert("your name is : ",name);
console.log(typeof name );

// Type casting from int to String
let age = prompt("Enter your age :  ",'');
console.log("Before typecasting",typeof age);
age=parseInt(age);
console.log("after typecasting",typeof age);

// if statement 
age = prompt("Enter your age for voting  :  ",'');
if(age>18){
  console.log("you can vote ");
}
console.log("Make your voter id")

// if else Statment
age = prompt("Enter your age for driving  :  ",'');
if(age>=18){
  console.log(`You can drive because your age is ${age}`);
}
else{
  console.log(`You cannot drive because your age is ${age}`);
}
// if -else if ladder
let buyp=prompt("enter you buy price" , '');
let soldp=prompt("Enter your sold price : ",'');
if(buyp>soldp){
  console.log("Loss");
}
else if(buyp == soldp){
  console.log("Netural");
}
else {
  console.log("Profit");
}
console.log("If else-if ladder complete");

console.log("Conditional Operator or ? operator ");
age=prompt("Enter you age : ",18);
let message = (age<18) ? 'you cannot drive':(age==18)? 'you need to get the DL ' : (age<100)? 'you can drive' : 'you dont know how to drive' ;
alert(message);
console.log(message);


