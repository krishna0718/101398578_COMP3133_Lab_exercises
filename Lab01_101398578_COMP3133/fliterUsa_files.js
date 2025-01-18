/*const fs = require('fs');
const csv = require('csv-parser');


const inputFile = 'input_countries.csv';
const usaFile = 'usa.txt';


const usaStream = fs.createWriteStream(usaFile);
usaStream.write('country,year,population\n'); 


fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    const country = row.country.toLowerCase().trim();

    if (country === 'united states') {
      usaStream.write(`${row.country},${row.year},${row.population}\n`);
    }
  })
  .on('end', () => {
    console.log('Data for the United States has been written to usa.txt.');
    usaStream.end();
  })
  .on('error', (err) => {
    console.error('Error:', err.message);
  });


*/


const fs  = require('fs')
const csv = require('csv-parser')

const inputData = 'input_countries.csv'
const usaData = 'usa.txt'

const usaStream = fs.createWriteStream(usaData)
usaStream.write('country,year,population\n'); // Write header


fs.createReadStream(inputData)
  .pipe(csv())
  .on('data', (row) => {
    if (row.country === 'United States') {
      usaStream.write(`${row.country},${row.year},${row.population}\n`);
    }
  })
  .on('end', () => {
    console.log('Data for USA has been written to usa.txt.');
    usaStream.end();
  })
  .on('error', (err) => {
    console.error('Error:', err.message);
  });
