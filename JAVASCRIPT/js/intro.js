// document.getElementById("ii").style.color = "red";
// document.getElementById("ii").style.backgroundColor = "green" ;
// // return back // to color after the 3seconds
// setTimeout(() => document.getElementById("ii")
// .style.background = 'white', 3000); 

// // Accessing all Parent and Children 
// for(let x=0 ; x < document.body.childNodes.length ; x++ ){
//     alert(document.body.childNodes[x]); // objtext , div , text script
// }
// for(let nodes of document.body.childNodes){
//     alert(nodes);
// }
// for(let nodes in document.body.childNodes){
//     alert(document.body.childNodes[nodes]);
// }
// alert(document.body.firstChild); // 
// alert(document.body.lastChild);
// alert(document.body.childNodes);
// alert(Array.from(document.body.childNodes));
// alert(document.body.childNodes[0] === document.body.firstChild );
// alert( document.body.childNodes[document.body.childNodes.length-1]===document.body.lastChild );

// // Filter Functions
// alert( Array.from(document.body.childNodes).filter ); // function

// // Next , Right and Previous/ left Sbiling
// // parent of <body> is <html>
// alert( document.body.parentNode === document.documentElement ); // true
// // after <head> goes <body>
// alert( document.head.nextSibling ); // HTMLBodyElement
// // before <body> goes <head>
// alert( document.body.previousSibling ); // HTMLHeadElement

// Example-2
// console.log(document.body.firstChild); // div-tag
// console.log(document.body.lastChild);  // scriptlet tag
// alert(document.body.firstElementChild.nextElementSibling); // <div class="second">second-sbiling</div>
// console.log(document.body.firstElementChild.nextElementSibling); // <div class="second">second-sbiling</div>

// alert(document.body.lastElementChild.previousElementSibling); // <div class="first">first-sbiling</div>
// console.log(document.body.lastElementChild.previousElementSibling); // <div class="first">first-sbiling</div>

// a=document.body.firstChild;
// console.log(a.parentNode); //body
// console.log(a.parentElement);  // body
// console.log(a.firstChild);// div.first
// console.log(a.firstChild.nextSibling); // div.second
// console.log(a.nextSibling);  //script tag




