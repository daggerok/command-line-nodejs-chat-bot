'use strict';

const patterns = require('../patterns');
const xRegExp = require('xregexp');

const matcherPattern = (input, cb) => {
  const result = patterns.find(item => xRegExp
    .test(input, xRegExp(item.pattern, 'i')));
  return !result ? cb({})
    : cb({ intent: result.intent, });
};

module.exports = matcherPattern;
