var assert = require('assert');
var calculator = require('../src/calculator');

describe('Calculator', function() {

    it('Add', function() {
        var value = calculator.result(4, 2, 'add');
        assert.equal(value, 6);
    });

    it('Subtract', function() {
        var value = calculator.result(4, 2, 'subtract');
        assert.equal(value, 2);
    });

    it('Multiply', function() {
        var value = calculator.result(4, 2, 'multiply');
        assert.equal(value, 8);
    });

    it('Divide', function() {
        var value = calculator.result(4, 2, 'divide');
        assert.equal(value, 2);
    });
});

describe('Calculator Exception', function() {

    it('Equation void', function() {
        var value = calculator.result(4, 2, '');
        assert.equal(value, 6);
    });

    it('Subtract', function() {
        var value = calculator.result(4, 2, null);
        assert.equal(value, 2);
    });

    it('Divide by zero', function() {
        (function() {
            assert.throws(calculator.result(4, 0, 'divide'));
        }).should.throw()
    });


});