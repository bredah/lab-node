var calculator = require('../../src/example/calculator');
var assert = require('chai').assert
var expect = require('chai').expect

describe('Calculator', function() {

    it('Add', function() {
        var result = calculator.result(4, 2, 'add');
        expect(result).to.equal(6);
    });

    it('Subtract', function() {
        var result = calculator.result(4, 2, 'subtract');
        expect(result).to.equal(2);
    });

    it('Multiply', function() {
        var result = calculator.result(4, 2, 'multiply');
        expect(result).to.equal(8);
    });

    it('Divide', function() {
        var result = calculator.result(4, 2, 'divide');
        expect(result).to.equal(2);
    });
});

describe('Calculator Exception', function() {

    it('Equation void', function() {
        var result = calculator.result(4, 2, '');
        expect(result).to.equal(0);
    });

    it('Equation null', function() {
        assert.throws(() => calculator.result(4, 2, null), Error);
    });

    // it('Divide by zero', function() {
    //     this.skip();
    //     assert.throws(() => calculator.result(4, 0, 'divide'), Error);
    // });
});