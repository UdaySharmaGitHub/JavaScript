// console.log("Start");
// setTimeout(()=>{
//     console.log("Hi");
// },3000);
// console.log("end");

// // Loading a Script
// // Callbacks with no-argumnet
// function loadScript(src,callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = function() {
//     console.log("Loaded script with SRC: " + src)
//     callback();   // callback the method
//   }
//   document.body.appendChild(script);
// }
// function hI(){
//   alert("Hello");
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",hI) ; // giving the method as the argument

// Callback Function With the argumemt
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function() {
    console.log("Loaded script with SRC: " + src)
    callback(null, src);
  }
  script.onerror = function() {
    console.log("Error loading script with SRC: " + src);
    callback(new Error("Src got some error"))
  }
  document.body.appendChild(script);
}
function hello(error, src) {
  if (error) {
    console.log(error)
    return
  }
  alert('Hello World!' + src);
}

function goodmorning(error, src) {
  if (error) {
    console.log(error)
    sendEmergencyMessageToCeo();
    return
  }
  alert('Good morning' + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",goodmorning) ; // giving the method as the argument

