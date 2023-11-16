let divElement = document.getElementById('first');
divElement.className = "red yellow";
// divElement.className += " text-dark"; // it doesnt make
// sense with our example but it will add the class yellow to the element
console.log(divElement.classList);
// add in the classList
divElement.classList.add("text-dark");
console.log(divElement.classList);
// remove in the classList
divElement.classList.remove("yellow");
console.log(divElement.classList);
// toggle in the classList
divElement.classList.toggle("text-dark");
console.log(divElement.classList);
// containe in the classList
console.log(divElement.classList.contains('text-dark')); // true
divElement.classList.toggle('text-dark');
console.log(divElement.classList);
console.log(divElement.classList.contains('text-dark')); // false

//we can use the for loop to iterate all the classitem in the
// classList
for(let cName of divElement.classList){
    console.log(cName);
}