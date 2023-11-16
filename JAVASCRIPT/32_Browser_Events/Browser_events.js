let container = document.getElementById("container");
container.onclick = function() {
	alert("Hey, this is logged from the JavaScript script!");
}
//Possible mistake
function sayHi(){
	alert("Hi");
}
let head = document.getElementsByTagName('h1')[0];
// head.onclick = sayHi();   // Don't use this
head.onclick = sayHi;  //used this 