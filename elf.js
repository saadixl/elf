let Menu = require('./classes/menu.js');
let Add = require('./classes/add.js');
let Fire = require('./classes/fire.js');
let menuIns = new Menu();

return menuIns.getOption()
  .then((selection) => {
    return eval(selection+"()");
  })

// Add project function
function add() {
  return new Add(__dirname);
}

// Fire up project function
function fire() {
  return new Fire();
}

// Quit function
function quit() {
  console.log("Bye!");
  process.exit(1);
}
