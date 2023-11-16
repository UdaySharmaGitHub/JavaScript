/*
Operators and Expressions
In JavaScript, an expression is a combination of values, variables, and operators that can be evaluated to produce a result. An expression can be as simple as a single variable, or it can be complex, involving many different parts. For example, the expression 29 is a valid JavaScript expression, as is a + b * 3, which involves two variables (aand b), a constant (3), and two operators (+ and *).

In programming, we often use operators in our computations. An operator is a symbol that tells JavaScript to perform a certain mathematical or logical operation. For example, when we write 20 + 9, 20 and 9 are our operands, and + is our operator, and 29 is our result. It's not always the case that we have one operator and two operands. For example, if we have !true, we have one operator (!), one operand (true), and false is our result.

Arithmetic Operators
Arithmetic operators are used to perform mathematical calculations. Here are the most common arithmetic operators in JavaScript:

Operator	Description	Example
+	Addition	3 + 5 evaluates to 8
-	Subtraction	7 - 2 evaluates to 5
*	Multiplication	4 * 6 evaluates to 24
/	Division	12 / 4 evaluates to 3
%	Modulus	10 % 3 evaluates to 1
**	Exponentiation	2 ** 3 evaluates to 8
In the above table, the first column represents the operator symbol, the second column describes what it does, and the third column provides an example of its usage. Here are some examples of arithmetic operators in action:

Terms: “unary”, “binary”, “operand”
Before we move on, let’s grasp some common terminology.

An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
*/
let c = 6;
c = -c;
console.log(c); // -6
/* An operator is binary if it has two operands. The same minus exists in binary form as well:
*/
let a = 90, b = 89;
console.log(a - b);  // 1
/*Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.
*/
// Arithmetic Operator
let x = 5, y = 2;
let d = x + y;
console.log(d); // 7
let e = x - y;
console.log(e); // 3
let f = x * y;
console.log(f); // 10
let g = x / y;
console.log(g); // 2.5
let h = x % y;
console.log(h); // 1
let j = x ** y;
console.log(j); // 25

//5 
console.log(x++);  // print 5 and then increament by 1
console.log(x);
console.log(++x); // 7

// 2
console.log(y--); // print 2 and then decreament by 1
console.log(y);
console.log(--y); // 0

// Arithmetic with assignment.
// x=7
x += 3;
console.log(x); //10
x -= 3;
console.log(x); // 7
x *= 3;
console.log(x); //21
x /= 3;
console.log(x); //7
x %= 3;
console.log(x); //1

// Conditional Operator.
console.log("Conditional Operator");
let comp1=12 , comp2=15;
console.log("Datatype is same");
console.log("comp1 > comp2",comp1 > comp2);
console.log("comp1 == comp2",comp1 == comp2);
console.log("comp1 === comp2",comp1 === comp2);
console.log("comp1 < comp2",comp1 < comp2);
console.log("comp1 != comp2",comp1 != comp2);
console.log("comp1 !== comp2",comp1 !== comp2);
console.log("Datatype is different");
console.log(12 === "12");
console.log(12 != "12");
console.log(12 == "12");
console.log(12 !== "12");

// Logical Operator
console.log("Logical Operator");
let l1=90, l2 = 78;
console.log(l1 > l2 || l1 == l2);
console.log(l1 > l2 && l1 == l2);
console.log(!0);
console.log(!1);
console.log(!(l1<l2));
console.log(!(l1==l2));