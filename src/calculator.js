result = (varA, varB, equation) => {
    if (equation == null) {
        throw new Error('Not exist equation with NUL value');
    }
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