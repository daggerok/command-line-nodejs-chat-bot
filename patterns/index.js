'use strict';

const patternsDictionary = [
  {
    pattern: '\\b(hello|hi|yo|y0|hey|hej|hola)\\b',
    intent: 'HELLO_COMMAND',
  },
  {
    pattern: '\\b(bye|bb|exit|quit)\\b',
    intent: 'BYE_COMMAND',
  },
];

module.exports = patternsDictionary;
