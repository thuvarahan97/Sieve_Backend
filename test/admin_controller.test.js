// // Import the dependencies for testing
// // import chai from 'chai';
// // import chaiHttp from 'chai-http';
// // import app from '../app';
// let chai=require("chai");
// let chaiHttp=require("chai-http");
// let app=require('../app');
// // Configure chai
// chai.use(chaiHttp);
// chai.should();


// describe("Admins", () => {
//     describe("GET /", () => {
//         // Test to get all admin record
//         it("should get all admin record", (done) => {
//              chai.request(app)
//                  .get('/admins')
//                  .end((err, res) => {
//                      res.should.have.status(200);
//                      res.body.should.be.a('object');
//                      done();
//                   });
//          });
//         // Test to get single student record
//         it("should get a single admin record", (done) => {
//              const id = 1;
//              chai.request(app)
//                  .get(`/${id}`)
//                  .end((err, res) => {
//                      res.should.have.status(200);
//                      res.body.should.be.a('object');
//                      done();
//                   });
//          });
         
//         // Test to get single student record
//         it("should not get a single admin record", (done) => {
//              const id = 7;
//              chai.request(app)
//                  .get(`/${id}`)
//                  .end((err, res) => {
//                      res.should.have.status(404);
//                      done();
//                   });
//          });
//     });
// });

// import viewAll from '../controllers/adminController/adminAdminsController';
const Admins = require('../models/adminModel/adminAdminsModel');
const admin=require('../controllers/adminController/adminAdminsController');
const assert=require('chai').assert;

// it("test",(done)=>{
//     console.log(admin.viewAll.call(req, res, next));
//     //  assert.equal(result[0],{ admin_id: 1, email: 'test', password: 'test' });
//     // assert
    
//     done();

// });

it("test111", function(req, res,next) {
    console.log(Admins.getAllData());
})

// it("test",(done)=>{
// const fetchData =  () => {
//     return new Promise((resolve, reject) => {
//         resolve((Admins.getAllData()));
//     });
// };
// fetchData().then((result)=>{
//      { result: result }
//     //  assert.equal(result[0],{ admin_id: 1, email: 'test', password: 'test' });
//     console.log(result[0])
//     //  console.log( result[0]);
// });
// done();

// });

// // console.log(Admins)