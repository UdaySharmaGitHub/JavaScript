/*
Default Parameters
A useful a ES6 feature allows me to set a default parameter inside a function definition  First, .

What that means is, I'll use an ES6 feature which allows me to set a default parameter inside a function definition, which goes hand in hand with the defensive coding approach, while requiring almost no effort to implement.

For example, consider a function declaration without default parameters set:
*/
// no default Parameter (Which is already is given)
function noDefaultParams(number) {
    console.log('Result:', number * number)
}
noDefaultParams(); // Result: NaN

// Default Parameter (Which is already is given)
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
withDefaultParams(); //100

class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams(2,3,4);
better.calculate(); // Result: 6

class Cake{
    hi(){
        console.log("hi1");
     }
}
 class butter extends Cake{
 hi(){
    console.log("hi2");
 }
 }
let result = new butter;
result.hi();