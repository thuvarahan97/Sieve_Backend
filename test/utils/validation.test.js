const validation = require('../../utils/validation');

var expect = require('chai').expect;

describe('Utils - Validation Tests', function() {
    describe('#emailValidation()', function() {
        it('should return true for valid email address', function() {
            expect(validation.emailValidation('test@gmail.com')).to.be.true;
        });
        it('should return false for invalid email address', function() {
            expect(validation.emailValidation('test@gmail')).to.be.false;
        });
    });
    describe('#passwordValidation()', function() {
        it('should return true for valid password', function() {
            expect(validation.passwordValidation('Test@123')).to.be.true;
        });
        it('should return false for invalid password', function() {
            expect(validation.passwordValidation('test123')).to.be.false;
        });
    });
});