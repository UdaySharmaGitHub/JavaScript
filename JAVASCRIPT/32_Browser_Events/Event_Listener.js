let btn = document.getElementById('btn');
//Both the Event Listner runs
btn.addEventListener('click',()=>{
    alert("This is Event Listener");
})
btn.addEventListener( "click", () =>{
    alert("This is Event Listener2");
});

// Another Example With the removeEventListener
let age = prompt("Enter the age: ",18);
let func = () =>{
    alert(`You age is ${age}`);
};
if(age >= "18"){
    btn.addEventListener( "click", func);
}
else{
    btn.removeEventListener( "click", func);
}