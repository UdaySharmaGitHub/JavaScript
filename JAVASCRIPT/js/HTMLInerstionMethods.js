let divName= document.getElementsByTagName('div')[0];
// update the element in the tag name
divName.innerHTML = '<h2>Hi i am uday Sharma</h2>';
// append the innerHTML in the element
divName.innerHTML += '<h2>This message is get append after</h2>';
// Create element to insert HTML which can append after the div tag
let divCreate = document.createElement('div');
divCreate.innerHTML = '<h1>JavScript</h1>';
// append this divCreate after the divName
divName.appendChild(divCreate);

// Other HTML Insertion Methods
let divCreataHtml = document.getElementsByClassName("ollist")[0];
// prepend HTML insertion methods
let liCreate = document.createElement('li');
liCreate.innerHTML='<h2>This is prepend</h2>';
divCreataHtml.prepend(liCreate);
// append HTML insertion methods
liCreate = document.createElement('li');
liCreate.innerHTML='<h2>This is append</h2>';
divCreataHtml.appendChild(liCreate);
// before HTML insertion methods
let divBefore = document.createElement('div');
divBefore.innerHTML='<h2>This is Before</h2>';
divCreataHtml.before(divBefore);
// After HTML insertion methods
let divAfter = document.createElement('div');
divAfter.innerHTML='<h2>This is After</h2>';
divCreataHtml.after(divAfter);
// div replaced
let divReplaced = document.createElement('div');
divReplaced.innerHTML = '<h2>This is replaced div</h2>';
divCreate.replaceWith(divReplaced);

//------------------InsertAdjacentHTML----------------//
let idDiv = document.getElementById("idDiv");
let firstDiv = document.getElementsByClassName('firstdiv')[0];
idDiv.insertAdjacentHTML('beforebegin','<h5>Before Begin</h5>');
idDiv.insertAdjacentHTML('beforeend','<h5>Before end</h5>');
idDiv.insertAdjacentHTML('afterbegin','<h5>After Begin</h5>');
idDiv.insertAdjacentHTML('afterend','<h5>After end</h5>');
// remove the whole element
idDiv.remove();


