const debug = require('debug')('nodejs-base:main');

debug.log = console.log.bind(console);

debug('hello world! %O', {one: 34, two: 'dos'});
