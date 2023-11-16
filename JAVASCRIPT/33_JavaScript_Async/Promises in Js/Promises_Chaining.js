// Promise Chainig 
let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 5000); // (*)
  }).then(function(result) { // (**)
    console.log(result); // 1
    return result * 2;
  }).then(function(result) { // (***)
    console.log(result); // 2
    return result * 2;
  }).then(function(result) {
    console.log(result); // 4
    return result * 2;
  });

// console.log(promise1);  // 4
// promise1.then((value)=>{   // 8
//     console.log(value);
// })


// // Promise is not because they running individually Chaning but same value
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   });
  
//   promise.then(function(result) {
//     console.log(result); // 1
//     return result * 2;
//   });
  
//   promise.then(function(result) {
//     console.log(result); // 1
//     return result * 2;
//   });
  
//   promise.then(function(result) {
//     console.log(result); // 1
//     return result * 2;
//   });

  // promises Chaining using the returning promises
  console.log("  // promises Chaining using the returning promises  ");
 let promise2 =  new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  }).then(function(result) {
    console.log(result); // 1
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  }).then(function(result) { // (**)
    console.log(result); // 2
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  }).then(function(result) {
    console.log(result); // 4
  });

  console.log(promise2);

