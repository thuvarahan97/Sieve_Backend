var expect  = require('chai').expect;
var request = require('request');

// describe('Status and content', function() {
//     // describe ('Main page', function() {
//     //     it('status', function(done){
//     //         request('http://localhost:8080/', function(error, response, body) {
//     //             expect(response.statusCode).to.equal(200);
//     //             done();
//     //         });
//     //     });

//         // it('content', function(done) {
//         //     request('http://localhost:8000/' , function(error, response, body) {
//         //         expect(body).to.equal('Hello World');
//         //         done();
//         //     });
//         // });
//     });

    describe ('Catagories page table', function() {
        it('status', function(done){
            request('http://localhost:8000/categories/', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
