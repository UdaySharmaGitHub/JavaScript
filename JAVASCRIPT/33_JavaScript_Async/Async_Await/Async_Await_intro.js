// Syntax of the Asyn :-
async function udaySharma1(){
    return "YO!!";
}
udaySharma1().then(console.log); // YO!!

async function udaySharma2(){
    return Promise.resolve("YO!!");
}
udaySharma2().then(console.log); // YO!!

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully


async function getData(){  // this function will be running in the background
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
             resolve(455);
        }, 3000);
    })
}

async function getData2() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}

async function main(){
    console.log("Loading Modules");
console.log("Do something");
console.log("Load Data");

// works only inside async functions
let data = await getData(); // this waits for the promise to resolve    
let data2 = await getData2(); // this waits for the promise to resolve    

console.log(data);
console.log(data2);

console.log("Process data");
console.log("task-2");
}
main();
/*
// Approach
data.then((value)=>{
    console.log(data);
    console.log("Process data");
console.log("task-2");
})
*/
