const readline = require('readline');
var config = require('../config.json');
var shell = require('shelljs');

class Add   {
  constructor() {
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
        this.openScript(shell, newFile);
        return Promise.resolve();
      });
  }

  openScript(shell, newFile) {
    if(config.os && (config.os.toLowerCase() === 'macos' || config.os.toLowerCase() === 'osx')) {
      shell.exec(`osascript -e 'tell application \"Terminal\" to do script \"nano ${newFile}\"'`);
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
