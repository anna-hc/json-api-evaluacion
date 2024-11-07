const { exec } = require('child_process');
const path = require('path');

const command = `npx json-server --watch ${path.join(__dirname, 'db.json')} --port 5000`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});