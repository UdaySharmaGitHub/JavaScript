/*
// Error Handling Intro
try {
  // code...
} catch (error) {
    // error handling
  }
*/
/*
  // -------------------Error Handling Intro-1----------------------------//
try {
    console.log("this is start ");
    console.log("this is the end: ")     // no error occur so its print try block statements
  } catch (error) {
    console.log("the error is inside the catch block: ");
    }
*/
/*
  // -------------------Error Handling Intro-2----------------------------//
  try {
    console.log("this is try block: start : ");
    thisistheerror     // error occur so its execute the catch block
    console.log("this is try block: end : ");
  } catch (error) {
       console.log("the error is inside the catch block: ");
    }
*/
/* 
// -------------------Error Handling Intro-1----------------------------//
  function letterFinder(word, match) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

let name="Uday Sharma" ,character = 'a';
letterFinder(name,character);
*/
/* 
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")
*/
/*
try {
        // ...
} catch (err) { // <-- the "error object", could use another word instead of err
        // ...
}
*/
try{
  Number(5).toPrecision(300);
}catch(err){
  console.log("there was error");
}