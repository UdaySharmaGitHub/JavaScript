// Syntax of Promises API Promises.ALl methods
// let promises = new Promise.all(iterable);
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(console.log); // 1,2,3 when promises are ready: each promise contributes an array member;


  // let urls = [
  //   'https://api.github.com/users/iliakan',
  //   'https://api.github.com/users/remy',
  //   'https://api.github.com/users/jeresig'
  // ];
  // // map every url to the promise of the fetch
  // let request = urls.map(url => fetch(url));
  // // Promise.all waits until all jobs are resolved
  // Promise.all(request)
  //   .then(responses => responses.forEach(
  //     response => console.log(`${response.url}: ${response.status}`)
  //   ));

    // A bigger example with fetching user information for an array of GitHub users by their 
    // names (we could fetch an array of goods by their ids, the logic is identical) I am fetching
    //  my Favoite youtuber github:
let names = ["UdaySharmaGitHub","freeCodeCamp","hiteshchoudhary","nwaliaez"];
let requests = names.map(name=>fetch(`https://api.github.com/users/${name}`));
Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for(let response of responses) {
      console.log(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => console.log(user.name)));