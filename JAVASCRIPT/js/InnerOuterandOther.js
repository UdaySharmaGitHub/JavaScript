// Difference b/t console.log() and console.dir()
console.log(document.getElementsByTagName("span")[0]);// DOM tree span
console.dir(document.getElementsByTagName("span")[0]);//DOM object span
// nodes and tag
console.log(document.body.firstChild.nodeName); //#text
console.log(document.body.firstElementChild.nodeName); // h1


// Accessing the h1 with id = innerHtml
let innerElement = document.getElementById("innerHtml");
console.log(innerElement.innerHTML); // empty
innerElement.innerHTML = "My name is ";  // Changed the innerHTML 
// outer elementn container full innerHTML + other Elements
console.log(innerElement.outerHTML); //<h1 id="innerHtml">My name is </h1>
innerElement.outerHTML = "im fine What about you";
console.log(innerElement.outerHTML); //same as <h1 id="innerHtml">My name is </h1>  

// text Content 
console.log(innerElement.textContent); // My name is
innerElement.textContent = "My name is Changed ";
console.log(innerElement.textContent); // My name is Changed 

// hidden
innerElement.hidden = true; // innerElement is hidden from the webpage
