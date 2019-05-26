'use strict';

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

reader.setPrompt('=> ');

console.info('Enter regex first, press enter and on next line enter string to test...');
console.info(`
For example:

# input:
=> colou?rs?
this is most colored color!

# output:
asserting pattern matcher...
found: color, color, colors

Read as a reference: https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions
`);
reader.prompt();

const db = {};
reader.on('line', replay => {
  const trimmed = !replay || !replay.trim() ? undefined : replay.trim();
  if (!trimmed) {
    delete db.regex;
    delete db.input;
  }
  else if (trimmed.toLocaleLowerCase() === 'q') process.exit(0);
  else if (!db.pattern) db.pattern = trimmed;
  else if (!db.string && !!trimmed) db.string = trimmed;
  //console.debug(`db = ${JSON.stringify(db, null, 2)}`);
  if (!!db.pattern && !!db.string) {
    console.info('asserting pattern matcher...');
    try {
      const regExp = new RegExp(db.pattern, "ig");
      const result = db.string.match(regExp);
      if (!result) console.info('nothing was found.');
      else console.log(`found: ${result.join(', ')}`);
    } catch (e) {
      console.info('oops:', e.msg || e.message);
    }
    process.exit(0);
  }
});
