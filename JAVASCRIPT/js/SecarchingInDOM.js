//  Changing the Card Title using getElementsByClassName("");
let changeCardTitle = document.getElementsByClassName("card-title") ;
changeCardTitle[0].style.color = "red"; // element-1 holding name card
changeCardTitle[1].style.color = "green";// element-2 holding name card
changeCardTitle[2].style.color = "blue";// element-3 holding name card

//  Changing the Card Title using getElementsByID("");
let changeCardPara = document.getElementById("para") ;
changeCardPara.style.color = "purple";

// match element 
let matchElement = document.querySelector('.card');
if(matchElement.matches('.card')){
    alert("Element is match");
}
else{
    alert("doesn't match");
}
let matchElement2 = document.querySelector('.btn');
if(matchElement2.matches('.btn')){
    alert("class is match");
}
else{
    alert("doesn't match");
}

//Closest  element
let cardBody =document.querySelector('.card-text');
console.log(cardBody.closest('.card-body')); //HTMLDivelement 
console.log(cardBody.closest('p')); // HTMLparaelement
console.log(cardBody.closest('card-title')); // null (because h5 is not an ancestor)

//contain Selecting
let cardBodyContain = document.querySelector('.card-body');
let cardTextContain = document.querySelector('.card-text');
// returing Ture value
if (cardBodyContain.contains(cardTextContain)) {
    console.log('The cardBodyContain element contains the cardTextContain element');
  } else {
    console.log('The cardBodyContain element does not contain the cardTextContain element');
  }
// returing False value
if (cardTextContain.contains(cardBodyContain)) {
    console.log('The cardTextContain element contains the cardBodyContain element');
} else {
    console.log('The cardTextContain element does not contain the cardBodyContain element');
  }
