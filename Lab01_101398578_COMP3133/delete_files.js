const fs = require('fs');


const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';


if (fs.existsSync(canadaFile)) {
  fs.unlinkSync(canadaFile);
  console.log(`${canadaFile} deleted`);
}

if (fs.existsSync(usaFile)) {
  fs.unlinkSync(usaFile);
  console.log(`${usaFile} deleted`);
}
