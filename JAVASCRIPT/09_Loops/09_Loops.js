// for loops ;
// first n natural numbers sum
let n = prompt("enter the number : ", '');
n = parseInt(n);
let sum = 0;
for (let i = 0; i <= n; i++) {
  sum += i;
}
console.log(`the sum of first ${n} natural number is ${sum}`);

// For-in loop 
let obj = {
  "Uday": 45, "Anshul": 46, "Yash":12
};

for(let i=0;i< Object.keys(obj).length;i++){
  console.log("the name is "+ Object.keys(obj)[i]+" and the marks is "+  obj[Object.keys(obj)[i]]);
}

for (let no in obj){
  console.log(`the name is ${no} and the roll no is ${obj[no]}`);
}

// for-of-loop
for(let x of "Uday Sharma"){
  console.log(x);
}

//while loops
let num=prompt("Enter the number : ",'');
let i=0;
// num=parseInt(num);
num=Number(num); //convert string into number
while(i<=num){
  console.log(i);
  i++;
}

//do-while loop
let input;
do{
  input=prompt("Enter the number ", '');
  input=Number(input);
}while(isNaN(input));

let j =0;
do{
  console.log(j);
  j++;
}while(j<input);

let nu;
do{
  nu=prompt("Enter the number :: ",'');
  if(nu==NaN){
    console.log("this is NaN");
  }
}while(nu==NaN);
console.log("you enter the correct number : "+nu)