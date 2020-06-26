const hashFunction = require('../../utils/hash_function');

var expect = require('chai').expect;

describe('Utils - HashFunction Tests', function() {
    describe('#encrypt()', function() {
        it('should return correct encrypted password', function() {
            var output = hashFunction.encrypt('Test@123');
            expect(output).to.be.string;
            expect(output).to.have.length.greaterThan(150);
        });
    });
    describe('#decrypt()', function() {
        it('should return correct decrypted password', function() {
            var output = hashFunction.decrypt('59b05f587aa11034bed8435ab0cedd5c451025b4dbff43ec99fee72d80c6fe9a1da1c9ac037e3a3e08bcbd2e3ee55bd52bd469fce2635f1304e1ffcd71749dbaf91c5ea0a1a781f433157551d7cf083d1cb94b77ab057cc74429a32abdbc9bfe1d7ad56e0c6da0af');
            expect(output).to.be.string;
            expect(output).to.be.equal('Test@123');
        });
    });
    describe('#checkHash()', function() {
        it('should return true for matching password', function() {
            var output = hashFunction.checkHash('Test@123', '59b05f587aa11034bed8435ab0cedd5c451025b4dbff43ec99fee72d80c6fe9a1da1c9ac037e3a3e08bcbd2e3ee55bd52bd469fce2635f1304e1ffcd71749dbaf91c5ea0a1a781f433157551d7cf083d1cb94b77ab057cc74429a32abdbc9bfe1d7ad56e0c6da0af');
            expect(output).to.be.true;
        });
        it('should return false for mis-matching password', function() {
            var output = hashFunction.checkHash('Test@123', 'cf5c9c4a6173ad62c328964d2e0750e722f2ce115431c06bee7c541af75da82bfd7502a3d64feec90a7d872007bc083516a3de2dfe095ba641e120e4ca97a66a45c58925bbcb9ff7d05fd9a09079cbdf305480868c151da4bcb466c54648d5bc0d1fb7146d7966f186');
            expect(output).to.be.false;
        });
    });
});