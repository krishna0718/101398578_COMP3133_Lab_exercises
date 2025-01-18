const fs = require('fs');
const csv = require('csv-parser');

// Input and output file paths
const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';

// Create writable stream for Canada
const canadaStream = fs.createWriteStream(canadaFile);
canadaStream.write('country,year,population\n'); // Write header

// Read and filter data for Canada
fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    if (row.country === 'Canada') {
      canadaStream.write(`${row.country},${row.year},${row.population}\n`);
    }
  })
  .on('end', () => {
    console.log('Data for Canada has been written to canada.txt.');
    canadaStream.end();
  })
  .on('error', (err) => {
    console.error('Error:', err.message);
  });
