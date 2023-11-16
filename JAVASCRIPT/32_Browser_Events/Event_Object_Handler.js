let element  = document.getElementById('element');
element.onclick = function(event) {
    // show event type, element and coordinates of the click
    alert(event.type + " at " + event.currentTarget);
    alert("Coordinates: " + event.clientX + ":" + event.clientY);
  };

  // Object Handler
let btn = document.getElementById('btn');
let obj = {
    handleEvent(event){
        alert(event.type + " at " + event.currentTarget);    }
};
btn.addEventListener('click',obj);

//Anthor Example of Event Object Handler
class Menu {
    handleEvent(event) {
      switch(event.type) {
        case 'mousedown':
          elem.innerHTML = "Mouse button pressed";
          break;
        case 'mouseup':
          elem.innerHTML += "...and released.";
          break;
      }
    }
  }

  let menu = new Menu();

  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);

  // another Way
  class Menu2 {
    handleEvent(event) {
      // mousedown -> onMousedown
      let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      this[method](event);
    }

    onMousedown() {
      elem.innerHTML = "Mouse button pressed";
    }

    onMouseup() {
      elem.innerHTML += "...and released.";
    }
  }

  let menu2 = new Menu2();
  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);