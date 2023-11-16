// alert("Hello ");
// setTimeout(function(){
//     alert("this is the setTimeout"); // run after the three seconds from above code
// },2000);
// let aSetExample  = setInterval(function(){
//     alert("this is another example of the setTimeout "); // runs after five sec
// },5000);

let btn = document.getElementById('bt').addEventListener('click',changeH);
let heading = document.getElementsByTagName('h1')[0]; // selecting the h1 tag
function changeH() {  // name change After @sec
    heading.innerHTML = "";
    setInterval(()=>{
        heading.innerHTML = "Uday Sharma";
    },2000);
      }

// clear Timeout
// let timeoutID = setTimeout(function() {
//     alert('This message will never be displayed.'); //this never run beacuse we clear the timeout
//   }, 1000);
//   clearTimeout(timeoutID);

//   // Another Example of the Clear Timeout
//   let timerId = setTimeout(() => alert("never happens"), 1000);
// alert(timerId); // timer identifier

// clearTimeout(timerId);
// alert(timerId); // same identifier (doesn't become null after canceling)

// setInterval Run after particular period of time
const sum = (a,b,c) => { heading.innerHTML = ""; 
heading.innerHTML = `the sum of the number is ${a+b+c}`;
};
setTimeout(sum,1000,1,3,5);
setInterval(() =>{
alert("set Interval");
},3000)
