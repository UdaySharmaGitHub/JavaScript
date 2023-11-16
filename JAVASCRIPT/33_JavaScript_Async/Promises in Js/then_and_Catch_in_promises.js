let p =new Promise((resolve,reject)=>{
 console.log("Promis is pending");
 setTimeout(()=>{
    console.log("I am promise and i am fulfilled");
    resolve(true);
 },4000);
})
// another promise which is rejected
let p2 =new Promise((resolve,reject)=>{
    console.log("Promis is pending");
    setTimeout(()=>{
       console.log("I am promise and i am Rejected");
       reject(new Error("this is error"));
    },4000);
   })
// these both promise 
console.log(p);  // promise is pending because it has a timeout of 4sec
console.log(p2);  // promise is pending because it has a timeout of 4sec 
//after p2 promise throw the error

p.then((value)=>{
    console.log(value);
})
// after the 4sec the p2 promises is executed
p2.then((value)=>{    // This cause the error because we are throwing the error
    console.log(value);
})
// to resolve this we using the catch promises
p2.catch((error)=>{
    console.log("Some error Occured in p2 promises");
})
// we can use the another wat to catch both value and the error
p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
})