let  p1 = new Promise((resolve,reject)=>{
    alert("this is not Resolved");
    setTimeout(() => {
        resolve(1);
    }, 3000);
})
p1.then(()=>{
    console.log("This is First Handler");
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(3);
        }, 3000);
    })
}).then((value)=>{
    console.log(`${value} print after the some second`);
})
p1.then(()=>{
    console.log("this promise is resolved ");
}).then(()=>{
    console.log("this is Second handler");
})