let Menu = require('./classes/menu.js');
let Add = require('./classes/add.js');
let menuIns = new Menu();

return menuIns.getOption()
  .then((selection) => {
    return eval(selection+"()");
  })

// Add project function
function add() {
  console.log("Add new project...");
  return new Add();
}

// Fire up project function
function fire() {
  console.log("Fire up existing project...");
}

// Quit function
function quit() {
  console.log("Bye!");
  process.exit(1);
}
