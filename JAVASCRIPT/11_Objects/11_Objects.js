let user = {  // an object
    name: "Uday Sharma ", // by key "name" store value "Uday"
    age: 19 // by key "age" store value 19
  };
  console.log(user.name, "\t", user.age);
  
  user.isAdmin = true;
  console.log(user.isAdmin);
  
  for (let x in user) {
    console.log(`The ${x} and the value if ${user[x]}`);
  }
  
  // delete property 
  delete user.age;
  for (let x in user) {
    console.log(`The ${x} and the value if ${user[x]}`);
  }
  
  // multiword value
  user = {  // an object
    name: "Uday Sharma ", // by key "name" store value "Uday"
    age: 19,// by key "age" store value 19
    "likes birds": true  // multiword property name must be quoted
  };
  console.log(user["likes birds"]);
  for (let x in user) {
    console.log(`The ${x} and the value if ${user[x]}`);
  }
  
  // tailling or listing 
  user = {  // an object
    name: "Uday Sharma ",
    age: 19,//“trailing” or “hanging” comma. Makes it easier to add/remove/move around properties,
  };