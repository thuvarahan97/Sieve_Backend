let chai=require("chai");
let chaiHttp=require("chai-http");
let server = require('../../../app');

chai.should();
chai.use(chaiHttp);

describe("Admins Users route test",()=>{

it("It should GET the Link users",(done)=>{
        chai.request(server)
        .get('/users')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET the Link users",(done)=>{
        chai.request(server)
        .get('/users/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            // console.log(res);
        done();
        })
    })
})