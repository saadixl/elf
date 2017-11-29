const List = require('prompt-list');

class Menu {
  constructor() {
    this.choices = ['Add new project', 'Fire up a project', 'Quit'];
    this.list = new List({
      name: 'menu',
      message: 'What you want to do?',
      choices: this.choices
    });
  }

  getOption() {
    return this.list.run()
      .then((option) => {
        return this.mapOptions(option);
      });
  }

  mapOptions(option) {
    const choices = this.choices;
    switch (option) {
      case choices[0]: {
        return 'add';
      }
      case choices[1]: {
        return 'fire';
      }
      case choices[2]: {
        return 'quit';
      }
      break;
      default:
    }
  }
}

module.exports = Menu;
