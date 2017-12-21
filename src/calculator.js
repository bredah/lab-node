const yargs = require('yargs');


result = (varA, varB, equation) => {
    var value = 0;
    switch (equation.toLowerCase()) {
        case 'add':
            value = varA + varB;
            break;
        case 'subtract':
            value = varA - varB;
            break;
        case 'multiply':
            value = varA * varB;
            break;
        case 'divide':
            value = varA / varB;
            break;
        default:
            break;
    }
    return value;
};

module.exports = {
    result
}