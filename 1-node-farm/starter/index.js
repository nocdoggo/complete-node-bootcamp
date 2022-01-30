const hello = 'Hello world';    // Use const to initiate a new variable
console.log(hello);             // Then, use the console log function to print the result out in the terminal

const fs = require('fs');       // Use a variable to call out the file-system 

// The synchronous version of file reading
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');     
console.log(textIn);

// Now, let us experiment the outout of files
// Do note that the `` accounts for the template string in EX6 of JavaScript
// And use $sign to add the variables into the template
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now}`;
// Do note that the Date.now returns the current time in millisecond format instead.

// Now write it out
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!');
