let p1 = new Promise((resolve,reject)=>{    // this promises is resolved
      setTimeout(() => {
        resolve("resolve-1");
      }, 1000);
})
let p2 = new Promise((resolve,reject)=>{    // this promises is resolved
    setTimeout(() => {
      resolve("resolve-2");
    }, 2000);
})
let p3 = new Promise((resolve,reject)=>{  // this promises is resolved
    setTimeout(() => {
      resolve("resolve-3");
    }, 3000);
})
let p4 = new Promise((resolve,reject)=>{  // this promises is rejected
    setTimeout(() => {
      reject(new Error ("Error"));
    }, 4000);
})

// p1.then((value) => {
//         console.log(value)
// })

// p2.then((value) => {
//         console.log(value)
// })

// p3.then((value) => {
//         console.log(value)
// })

let promise_all = Promise.all([p1,p2,p3]);
promise_all.then((value)=>{
console.log(value);  // give the resolve of all the promises in the form array
});

/*
// this Throw error
let promise_all_with_error = Promise.all([p1,p2,p3,p4]);  //  this Throw Error because the p4 promise is rejected
promise_all_with_error.then((value)=>{
    console.log(value);  // give the resolve of all the promises in the form array
    });
*/

// Its Gives the Status and Value if its resolve 
// if its Rejected the status and resonse
let promise_allSettled = Promise.allSettled([p1, p2, p3,p4]);
promise_allSettled.then((value)=>{
    console.log(value);  // give the resolve of all the promises in the form array
    });

// its return the value of the promise which execute First
let promise_race = Promise.race([p1, p2, p3,p4])  // resolve-1
promise_race.then((value)=>{
    console.log(value);  // give the resolve of all the promises in the form array
    });

let promise_any = Promise.any([p1,p2,p3,p4])
promise_any.then((value)=>{
    console.log(value);  // give the resolve of all the promises in the form array
    });

let promise_resolve = Promise.resolve([p1,p2,p3,p4])
promise_resolve.then((value) => {
        console.log(value)
})

let promise_reject = Promise.reject(new Error ("hey")); // ([p1,p2,p3,p4])
promise_reject.then((value) => {
        console.log(value)
})