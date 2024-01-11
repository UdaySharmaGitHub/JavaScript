// Resolve in promises when job is successful
let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
    // after 1 second signal that the job is done with the result "done"
    console.log("promises in resoleve-1")
    resolve(100);
    setTimeout(() => resolve("done"), 1000);
    console.log("promises in resoleve-2")
  });
console.log(promise);

// Reject in promises - if the job is fail
  let promise2 = new Promise(function(resolve, reject) {
    // after 5 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 5000);
  });

// Another Example of Promises
let promise3 = new Promise(function(resolve, reject) {
    console.log("Hello");
    resolve(56); //
})

console.log("Hello One")
setTimeout(function() {
    console.log("Hello Two in 2 seconds")
}, 2000)

console.log("My name is " + "Hello Three")
console.log(promise3)