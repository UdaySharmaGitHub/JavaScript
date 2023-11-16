// representation of array
// let arr = new Array();
// let arr1 = [] ;
let numbers = [12, 23, 45, 566, 78, 89]
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
let fruits = ["Orange", "Pear", "Apple"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
// replace the element
fruits[1] = "Grapes";
console.log(fruits);  // [ 'Orange', 'Grapes', 'Apple' ]
// Add the new Element
fruits[3] = "Banana";
console.log(fruits);  // [ 'Orange', 'Grapes', 'Apple', 'Banana' ]
//  length and type of the array
console.log(numbers.length); // 6
console.log(typeof numbers);
console.log(fruits.length); // 4
console.log(typeof fruits);
//An array can store elements of any type.
// For instance
let arr = ["Uday Sharma", { Marks: 69 }, function() { console.log("IIFE"); }, true];
console.log(arr);
console.log(arr[0]); // Uday Sharma
console.log(arr[1], " and ", arr[1].Marks);  // 69
arr[2]();  // IIFE
console.log(arr[3] == true);

// Accessing the Last Element
let fruit = ['Orange', 'Grapes', 'Apple', 'Banana'];
console.log(fruit.length); // 4
console.log(fruit[-1]); // undefined
// acceding the last index in the array using object.length - 1
console.log(fruit[fruit.length - 1]); // Banana
// or we can use the .at(i) method
console.log(fruit.at(-1)); // Banana // last element
console.log(fruit.at(-2)); // Apple // second last element

// push and pop operation
fruit = ['Orange', 'Grapes', 'Apple', 'Banana'];
// POP Operation
fruit.pop(); // remove the Banana
console.log(fruit); // [ 'Orange', 'Grapes', 'Apple' ]
// PUSH Operation
fruit.push("Mango"); // add the mango
console.log(fruit); // [ 'Orange', 'Grapes', 'Apple', 'Mango' ]

// shift and unshift
fruit = ['Orange', 'Grapes', 'Apple', 'Banana', "Kiwi"];
// shift
// shift can also add the element in the array like pop
let shiftArray = fruit.shift();
console.log(shiftArray, fruit);//4 [ 'Grapes', 'Apple', 'Banana', 'Kiwi' ]
// unshift
// unshift can also add the element in the array like push
let unshiftArray = fruit.unshift("strawberry", "Blueberry");
console.log(unshiftArray, fruit) // 6 [ 'strawberry', 'Blueberry', 'Grapes', 'Apple', 'Banana', 'Kiwi' ]

//Delete method in the array
fruit = ['Orange', 'Grapes', 'Apple', 'Banana', "Kiwi"];
delete fruit[2]; // delete the 2nd index element in the array
console.log(fruit); //[ 'Orange', 'Grapes', <1 empty item>, 'Banana', 'Kiwi' ]

// concat of the array
fruit = ['Orange', 'Grapes', 'Apple', 'Banana', "Kiwi"];
let vegetables = ["Potato", "Tomato", "Onion"];
let veganFood = fruit.concat(vegetables);
console.log("THe merge of the array is : \n", veganFood);
// The concat() method can also be used to add items to an existing array. For example, the following code adds the string "Pineapple" to the array fruit:
let allFruit = fruit.concat("Pineapple");
console.log("Concating asingle element in the array : ", allFruit);

// sort() method in the array
console.log("unsorted Array ",allFruit);
console.log("Sorted array Alphabetically : ",allFruit.sort());
// We can sort the numbers take elements as the String
// right way to sort
let compare = (a,b) =>  {return a-b;}
                            
let Numbers = [12,54,67,34,9,23,12,75];
// console.log(Numbers);
// console.log(Numbers.sort());
//Right ways to sort the number 
console.log("Unsorted the numbers",Numbers)
Numbers.sort(compare);
console.log("sorted the numbers with functions",Numbers);

// reverse method of Array
fruit = ['Orange', 'Grapes', 'Apple', 'Banana', "Kiwi"];
console.log("Array \n",fruit);
console.log("Reversed array \n",fruit.reverse());

//slice
fruit = ['Orange', 'Grapes', 'Apple', 'Banana', "Kiwi"];
let copySlice = fruit.slice();
console.log("Make a Shallow copy of Array : ",copySlice);
let sliceArray = fruit.slice(1,3);
console.log("Slicing the fruit array in which 1 is inclued and 3 is exclued",sliceArray);

// splice
fruit = ['Orange', 'Grapes', 'Apple', 'Banana', "Kiwi"];
console.log(" .splice(a,b) ;")
console.log("its exclued the elements from the a and b-1 indexs from the array : \n",fruit.splice(0,2));

//indexof() method of array 
fruit = ['Orange', 'Grapes', 'Apple', 'Banana', "Kiwi"];
console.log("It gives the index of the banana :",fruit.indexOf("Banana"));
