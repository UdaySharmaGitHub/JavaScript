const loadScript = (src) =>{
    return new Promise((resolve,reject) =>   {  // returning the Promises
        let script =document.createElement('script');
        script.type= "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload =()=>{
            resolve("The Script has been loaded  up");
        }
        script.onerror =()=>{
            reject(0);
        }
    }
        );}

let  p = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js") ; 
// p.then((value) =>{
//    console.log(value);
// }).catch((error)=>{
//  console.log("we are sorry but we are having a problem for loading the script");
// });

// Promises Chaining
p.then((value) =>{
   console.log(value);
   return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js") ; 
}).then((value) =>{
    console.log("Secaond Script Load");
 }).catch((error)=>{
 console.log("we are sorry but we are having a problem for loading the script");
});