let name="ME";
function message() {
  console.log("hello");
  name = "Uday Sharma"; // changed the outer variable
  console.log(name);
}
console.log(name); // Me before the function call
message(); //changs the name value Uday Sharma
console.log(name); // // Uday Sharma,the value was modified by the function

// function with parameter
function marksavg(a,b){
  let avg=(a+b)/2;
  return avg ; // returning the value
}

// console.log("the avg marks is : ", marksavg(50,150)); 

// // Arrow Function
// const mymessage = () => {
//   console.log("hi everyone ! ");
// };

// mymessage();


//----------------------EXAMPLE----------------//
// //  Summation upto n numbers 
// function sum(n){
//   if(n==0){
//     return 0;
//   }
//   else{
//     return (n+sum(n-1));
//   }
// }
// //  multiplication upto number 
// function mul(n){
//   if(n==0){
//     return 1;
//   }
//   else{
//     return (n*mul(n-1));
//   }
// }
// //  Fibonacci Series
// function fib(n){
//   if(n==0){
//     return 0;
//   }
//     else if(n==1 || n==2){
//       return 1;
//     }
//   else{
//     return (fib(n-1)+fib(n-2));
//   }
// }
// // Even or ODD
// function evenOdd(n){
//    if(n%2==0){
//      return "even";
//    }
//   return "odd";
// }
// let n=prompt("enter the summation : ",'');
// n=Number(n);
// console.log("the ans is ",sum(n), " and the multiplication is ",mul(n), "and the fibonacci index is ",fib(n)," and the number is even or odd is ",evenOdd(n));

// // function has its own value
// function greet(){
//   console.log("Hello !");
// }

// console.log(greet); // its print the function code 
// let sayhi=greet; // (2) copy
// sayhi(); // its work
// greet(); // its work too

//---------------caLLBACK FUNCTION----------------//
// // // callback function 
// // function ask(question,yes,no){
// //    if(confirm(question)){
// //      yes();
// //    }
// //   else{
// //     no();
// //   }
// // }

// // let showok=()=> {
// //   alert("you ok");
// // };
// // let showcancel=()=>{
// //   alert("you cancelled the question ");
// // };
// // // function  showok or showcancel passed as the argument 
// // ask("Do you agree ! ",showok,showcancel);

// function ask(question,yes,no){
//    if(confirm(question)){
//      yes();
//    }
//   else{
//     no();
//   }
// }

// let showok=()=> {
//   console.log("you ok");
// };
// let showcancel=()=>{
//   console.log("you cancelled the question ");
// };

// ask("Do you agree ! ",showok,showcancel);

// // callback function-2
// // callback function 
// function ask(question,yes,no){
//    if(confirm(question)){
//      yes();
//    }
//   else{
//     no();
//   }
// }

// // function  showok or showcancel passed as the argument 
// ask("Do you agree ! ",
//    function(){ alert("you click ok")},
//     function(){alert("you clicked cancelled")} );

// // function Expression and function declartion
// // function Expression
// sayhi("Uday Sharma")

// function sayhi(name){
//     alert (`hi i am ${name}`);
// }
// // function declartion
// sayhi("Uday Sharma")

// let sayhi = (name) =>{     //error
// alert(`hi i am ${name}`);
// }


// //-------------------------arrow function----------------//
// let marks = (a, b) => (a + b) / 2;
// console.log("the marks is : ", marks(45, 45));  // 45

// let double = n => n * n;
// console.log("the square of number is : ", double(9));

// let sayhi = () => alert("hi");
// sayhi();

// let age = prompt("enter your age : ", 18);
// let check = (age < 18) ?
//   () => alert("hi") :
//   () => alert("greeting");
// check();

// //  multiline arrow function 
// let fun1 = (a, b) => {
//   let c = a + b;
//   return c;
// };
// console.log(`the sum of 34 adn 45 is ${fun1(34, 45)}`);