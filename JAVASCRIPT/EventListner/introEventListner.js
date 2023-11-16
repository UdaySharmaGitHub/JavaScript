let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
    let h1 = document.createElement('h1')
    h1.setAttribute('id','headingid');
    h1.setAttribute('class','headingClass');
    h1.innerText = answer;
    // document.body.innerText = '';
    document.body.appendChild(h1);
}
let h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

let input = document.createElement('input')
input.setAttribute('type', 'text')

// document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})
let head = document.querySelector('h1');
let arr = [
'Example Domain',
'First Click',
'Second Click',
'Third Click'
];
function handleClick(){
  switch(head.innerText){
      case arr[0]:
        head.innerText = arr[1];
          break;
    case arr[1]:
        head.innerText = arr[2];
          break;
    case arr[2]:
        head.innerText = arr[3];
          break;
   default :
   head.innerText = arr[0];
  }
    
}
head.addEventListener('click',handleClick);