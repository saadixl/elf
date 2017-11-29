const projects = require('../projects.json');
const List = require('prompt-list');
const shell = require('shelljs');

class Fire {
  constructor(rootDir) {
    this.choices = Object.keys(projects);
    this.list = new List({
      name: 'menu',
      message: 'What project you want to fire up?',
      choices: this.choices
    });

    return this.list.run()
      .then((project) => {
        shell.cd('scripts');
        shell.exec(`${rootDir}/scripts/${project}.sh`);
        process.exit(1);
        return Promise.resolve();
      });
  }
}

module.exports = Fire;
