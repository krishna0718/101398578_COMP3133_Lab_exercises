const fs = require('fs');

// File paths
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

// Delete canada.txt if it exists
if (fs.existsSync(canadaFile)) {
  fs.unlinkSync(canadaFile);
  console.log(`${canadaFile} deleted`);
}

// Delete usa.txt if it exists
if (fs.existsSync(usaFile)) {
  fs.unlinkSync(usaFile);
  console.log(`${usaFile} deleted`);
}
