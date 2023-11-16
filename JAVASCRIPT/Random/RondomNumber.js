let randomNumber = Math.random();
let randomNumber2 = Math.random();
console.log(randomNumber);
console.log(randomNumber2);
randomNumber *=10;
randomNumber = Math.floor(randomNumber)+1;  // we get number btw 1to 10
console.log(randomNumber);
randomNumber2*=6;
randomNumber2 = Math.floor(randomNumber)+1;  // we get number btw 1to 6 act as a dice
console.log(randomNumber2);
console.log(Math.pow(randomNumber2,2));