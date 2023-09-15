// //-------------------- Query Selector-------------//
// // <!-- Example-3 -->
// /* <div class="tagdiv-2"><div class="first-div">1st Sbiling</div><p class="para-tag">2nd Sbiling p-tag</p></div><script src="./js/intro.js"></script> */
// // Example-3
// let p=document.body.querySelector("p");
// console.log(p.parentNode);// div.tagdiv-2
// console.log(p.parentElement); // div.tagdiv-2
// console.log(p.previousElementSibling); // div.first-div

// //-------------------- Query Selector all--------------//
// // printing the last element of the ul > li
// let elementLast = document.body.querySelectorAll('ul > li:last-child');
// for(let elem of elementLast){
//     console.log(elem);
// }
// // printing the first element of the ul > li
// let elementFirst = document.body.querySelectorAll('ul > li:first-child');
// for(let elem of elementFirst){
//     console.log(elem);
// }

// // firstElementChild ,nextElementSibling ,lastElementChild ,previousElementSibling ,parentElement
// //  parentNode
console.log(document.body.firstElementChild);  // ul:nth-child(1)
console.log(document.body.firstElementChild.nextElementSibling); // ul:nth-child(2)
console.log(document.body.lastElementChild);  //Script
console.log(document.body.lastElementChild.previousElementSibling); // ul:nth-child(2)
console.log(document.body.lastElementChild.parentElement); //body
console.log(document.body.lastElementChild.parentNode); // body




