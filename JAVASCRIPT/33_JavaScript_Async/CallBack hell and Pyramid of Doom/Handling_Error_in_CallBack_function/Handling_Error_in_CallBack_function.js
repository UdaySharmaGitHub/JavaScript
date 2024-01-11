// callback function with argument which is src and Error handling
function loadScript(src,callback){
    let script = document.createElement('script');
     script.src=src;
     script.onload = ()=>{
        console.log("Loaded script with SRC: " + src)
        callback(null, src); // callback taking the two arguments
     }
     script.onerror= ()=>{
        console.log("Error loading script with SRC: " + src);
        callback(new Error("Src got some error"))
     }
     document.body.appendChild(script);
}
function hello(error, src) {
    if (error) {
      console.log(error)
      return;
    }
    alert('Hello World!' + src);
  }
  
  function goodmorning(error, src) {
    if (error) {
      console.log(error)
      sendEmergencyMessageToCeo();
      return
    }
    alert('Good morning' + src);
  }
  
  // loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1//js/bootstrap.bundle.min.js",goodmorning) ; // giving the method as the argument and get error due to wrong script
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",goodmorning) ; // giving the method as the argument
  