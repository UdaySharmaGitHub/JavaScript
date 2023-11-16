const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

//Convert a string to an array using the spread operator
// Given a string, it's easy to spread it out into separate array items:
const name = "UdaySharma";
const arrayOfChars = [...name];
console.log(arrayOfChars); // [ 'U', 'd', 'a', 'y','S', 'h', 'a', 'r', 'm', 'a']

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1};
car1.speed = 201
console.log(car1.speed, car2.speed);

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2);

// Spread Operator using in Function 
function countSpread(...numbers){
    console.log(numbers.length);
}

countSpread(1,2,3,4,5,6,7,null);
