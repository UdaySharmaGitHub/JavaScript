// Accessing the first child node of the body
let firstChild = document.body.firstChild;
console.log(firstChild); // #text
// Accessing the first element child node of the body
let firstElementChild = document.body.firstElementChild;
console.log(firstElementChild); // <nav>
console.log(firstElementChild.nextSibling); // #text
console.log(firstElementChild.nextElementSibling); // <div>
// Accessing the last child node of the body
let lastChild = document.body.lastChild;
console.log(lastChild); // script
// Accessing the last element child node of the body
let lastElementChild = document.body.lastElementChild;
console.log(lastElementChild); //script
console.log(lastElementChild.previousSibling); // #text
console.log(lastElementChild.previousElementSibling); // <div>

const backgroundChange = () => {
    firstElementChild.style.backgroundColor = "green";
    document.body.style.backgroundColor = "lightblue" ;
    lastElementChild.previousElementSibling.style.backgroundColor = "blue" ;
}

let ask = confirm("you want to change the color : ");
if(ask){
    backgroundChange();
}
else{
    alert("change next time ") ;
}