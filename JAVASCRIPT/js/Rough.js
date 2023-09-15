let changeArea = document.getElementById("changeArea");
let changeText = document.getElementById("changeText");
let changeBtn = document.getElementById("changeBtn").addEventListener("click",changingText);
let resetTextBtn = document.getElementById("resetBtn").addEventListener("click",resetingText);

changeArea.style.background = "red";
changeText.style.background = "green";
changeBtn.style.backgroundColor = "cyan";
function changingText(){
     changeArea.innerHTML = "Hi How are you" ;
}
function resetingText(){
    changeArea.innerHTML ="Enter Text";
}