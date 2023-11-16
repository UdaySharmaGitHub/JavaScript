// result = (a !== null && a !== undefined) ? a : b;
let user;
console.log(user ?? "Anonymous or null and undefined");
let name="me";
console.log(name ?? "Anonymous");
// using three variabls
let firstname=null , lastname = null;
console.log(firstname ?? name ?? lastname ?? "Anonymous"); //me

// comparision operator gives the same 
console.log(firstname || name || lastname || "Anonymous"); //me

// Difference between || and ?? 
let age=0;
console.log(age || 100); // check age is falsey and its = 0 ,falsey indeed , so result of || second value
console.log(age ?? 100); //height ?? 100 checks height for being null/undefined, and it’s not, so the result is height “as is”, that is 0.

// precedence
let b=null , w=null ;
// let b=prompt("enter the base : ",'');
// let w=prompt("enter the width : ",'');
let area=(b ?? 100)*(w ?? 100);
//gives wrong answer bcoz the precedence of ?? is higher than ||
console.log("the area is : ",area); //10000

// let x = 1 && 2 ?? 3; // Syntax error
let x = (1 && 2) ?? 3; // Works
console.log(x); // 2

