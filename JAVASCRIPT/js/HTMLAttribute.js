let divELement = document.getElementById("elem");
console.log(divELement);
//getAttribute
console.log(divELement.getAttribute("class"));// shows the class name divelem  
//hasAttribute = check weather the attribute is present or not
console.log(divELement.hasAttribute("class"));// true
console.log(divELement.hasAttribute("style"));// true
//setAttribute
divELement.setAttribute("hidden" ,"true"); // div removed
divELement.removeAttribute("hidden"); //hidden attribute removed
divELement.setAttribute("class","divChangedelem");
console.log(divELement.getAttribute("class"));//shows the newclass name divelem  
// divELement.removeAttribute("style");
console.log(divELement.dataset);
