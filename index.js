'use strict';

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

reader.setPrompt('=> ');

const matcher = require('./matcher');
reader.prompt();

reader.on('line', replay => {
  matcher(replay, data => {
    // console.debug('reply', replay, 'data', data);
    switch (data.intent) {
      case 'HELLO_COMMAND':
        console.info('привед!!! :)');
        break;
      case 'BYE_COMMAND':
        console.info('пока... =(');
        process.exit(0);
        break;
      default:
        console.info(`Sorry, but I don't understand you! Exiting...`);
        break;
    }
  });
});
