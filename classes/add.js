const readline = require('readline');
const config = require('../config.json');
const jsonfile = require('jsonfile')
let projects = require('../projects.json');
const shell = require('shelljs');

class Add   {
  constructor(rootDir) {
    return this.setProjectName()
      .then((name) => {
        this.name = name;
        return this.setProjectKey();
      })
      .then((key) => {
        this.key = key;
        const newFile = `${key}.sh`;
        shell.cd('scripts');
        shell.touch(newFile);
        shell.chmod('+x', newFile);
        this.openScript(shell, newFile, rootDir);
        return Promise.resolve();
      })
      .then(() => {
        projects[this.key] = this.name;
        const file = '../projects.json';
        jsonfile.writeFile(file, projects, function (err) {
          if(!err) {
            console.log("Projects updated successfully");
          } else {
            console.log(err);
          }
        });
        return Promise.resolve();
      });
  }

  openScript(shell, newFile, rootDir) {
    // If MacOS then open script using nano in new terminal
    if(config.os && (config.os.toLowerCase() === 'macos' || config.os.toLowerCase() === 'osx')) {
      shell.exec(`osascript -e 'tell application \"Terminal\" to do script \"nano ${rootDir}/scripts/${newFile}\"'`);
    }
  }

  setProjectName() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });
    return new Promise((resolve) => {
      rl.question('Enter name: ', (answer) => {
        resolve(answer);
        rl.close();
      });
    });
  }

  setProjectKey() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });
    return new Promise((resolve) => {
      rl.question('Enter a key: ', (answer) => {
        resolve(answer);
        rl.close();
      });
    });
  }
}

module.exports = Add;
