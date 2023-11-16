// String Conversion
console.log("String Conversion");
let value = true;
console.log(typeof value);// boolean

value = String(value);  // now value is a string "true"
console.log(typeof value); // string

// Numeric Conversion
console.log("Numeric Conversion");
console.log("6" / "2"); // 3, strings are converted to numbers

let str = "123";
console.log(typeof str); // string
let num = Number(str); // becomes a number 123
console.log(typeof num); // number

let age = Number("What's your age : ");
console.log(age);// NaN, conversion failed
alert(Number("   123   ")); // 123
alert(Number("123z"));      // NaN (error reading a number at "z")
alert(Number(true));        // 1
alert(Number(false));       // 0

// boolean Conversion
console.log(" boolean Conversion");
alert(Boolean(true));
alert(Boolean(false));
alert(Boolean(0));
alert(Boolean(1));
alert(Boolean("Hello"));  //true
alert(Boolean(""));  // Fales
alert(Boolean(" "));  // spaces, also true (any non-empty string is true)
alert(Boolean("0")); // true

