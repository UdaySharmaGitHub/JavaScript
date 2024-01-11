// Syncronous programming
// const prompt = require("prompt-sync")();
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// console.log(a + " is " + b + " years old and has " + c + " favorite color.");

// // Asynchronous programming
// console.log("start"); // Compile First
// setTimeout(()=>{
//   console.log("The Asynchronus Code in JavaScrip"); // Run After 3seconds
// },3000)
// console.log("End");// Compile First

// Loading a Script
/*
function loadScript(src){
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js")
*/


// Callbacks with no-argumnet
function loadScript(src,callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function() {
    console.log("Loaded script with SRC: " + src)
    callback();   // callback the method with no argument
  }
  document.body.appendChild(script);
}
function hI(){
  alert("Hello");
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",hI) ; // giving the method as the argument
