let singleQuotes = 'Uday Sharma';
let doubleQuotes = "JavaScript";
let backticks = `Strings`;

let age = 19;
console.log(typeof age);
let ageString = age.toString(); // converting number into string
console.log(typeof ageString);

// common special characters
console.log("hi my name is \n\t\t" + singleQuotes + "\n\t\t\t\thow are you !");

//Because it’s so special, if we need to show an actual backslash \ within the string, we need to double it:
console.log("hi \\");
// Escaped Quotes
console.log('I\'m fine');
console.log("I'm fine");

// String length
let message = "this is the javaScript String Tutorial";
console.log(`the string length is : ${message.length} `);
//Accessing character from the String
console.log(message[2]); // i
console.log(message[23]); // s
console.log(message[8]); // t
// using .at(pos) string method
console.log(message.at(-1)); // l
console.log(message.at(-2)); // a
for (let x of "JavaScript") {
  console.log(x + "\t");
}

//Strings are immutable
let sayHi = "How are you";
sayHi[0] = "p"; // can't be changed
console.log("the character is not changed ", sayHi[0]);

// changing case;
let desc = "How are you I'm Uday Sharma";
console.log(desc.toUpperCase());  // transform the string into uppercase
console.log(desc.toLowerCase());  // transform the string into LowerCase
// indexof() method
console.log(desc.indexOf("U"));  // 16
console.log(desc.indexOf("you")); //8,because 'you is found at the beginning
console.log(desc.indexOf("x"));  // -1 not found
// giving the second parameter for the occurance
console.log(`the 'o' is at 1 occurance is ${desc.indexOf('o', 1)} and the 2 occurance of 'o' is ${desc.indexOf('o', 2)}`);

let decsOne = "This is String Chapter of javaScript and the we gonna learn String methods";
let pos = 0;
while (true) {
  let foundPos = decsOne.indexOf("a", pos);
  if (foundPos == -1) break;

  else
    console.log(`the occurance of 'a' is at index is ${foundPos}`);

  pos = foundPos + 1;
}

//includes Methods
let includeString = "This String is to apply the include method of Strings in javaScript";
let includeString1 = ["Uday","Java","JavaScript","C++"];
console.log(includeString.includes("apply"));  // true
console.log(includeString.includes("javaScript")); // true
console.log(includeString1.includes("JavaScript")); // False
console.log(includeString.includes("Uday Sharma")); // False
// endsWith and startsWith
console.log("the endsWith and startsWith String methods");
console.log(includeString.endsWith("javaScript"));
console.log(includeString.endsWith("You"));
console.log(includeString.startsWith("This"));
// Slice string method
let getSubstring="Uday Sharma";
console.log("the slicestring of 'getSubstring' is : "+getSubstring.slice(2));//ay Sharma
console.log("the slicestring of 'getSubstring' is : "+getSubstring.slice(-4,-1)); // ma
console.log("the slicestring of 'getSubstring' is : "+getSubstring.slice(5)); // Sharma 
// subString String method
console.log("the substring of 'getSubstring' is: "+getSubstring.substring(3,11));// Sharma 
console.log("the substring of 'getSubstring' is: "+getSubstring.substring(0,5));//Uday
console.log("the substring of 'getSubstring' is: "+getSubstring.substring(5,0));//Uday 
console.log("the slicestring of 'getSubstring' is : "+getSubstring.slice(5,0)); // empty String
// substr String Methods
console.log("the substr of 'getSubstring' is : "+getSubstring.substr(4,10)); // 
console.log("the substr of 'getSubstring' is : "+getSubstring.substr(-10,5)); // 

//replace String methods 
let replaceString = "Code with me";
console.log(replaceString.replace("me" ,"you")); // Code with you
console.log(replaceString.replace("Code" ,"Coding")); //Coding with me
//trim String methods
let trimString = "          code with me                  ";
console.log(trimString.trim());



