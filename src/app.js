console.log('Start app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
const calc = require('./calculator.js')

var result = calc.result(1, 2, 'add');
console.log('>> ' + result);

var result = calc.result(1, 0, 'divide');
console.log('>> ' + result);

// var user = os.userInfo();

// console.log(`Hello ${user.username}!`);

// fs.appendFile('greetings.txt', 'Hello ' + user.username + '!', function(err) {
//     if (err) {
//     console.log('Unable to write to file');
//     }
// });