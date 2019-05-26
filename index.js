'use strict';

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

reader.setPrompt('=> ');

reader.prompt();
reader.on('line', replay => {
  console.log(`${replay}? Sorry, but I don't understand you...`);
  // TODO: implement me please...
  process.exit(0);
});
