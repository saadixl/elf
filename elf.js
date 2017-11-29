let Menu = require('./classes/menu.js');
let menu = new Menu();

return menu.getOption()
  .then((selection) => {
    console.log("Selection: ",selection);
  })
