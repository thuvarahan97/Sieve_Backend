 let chai=require("chai");
let chaiHttp=require("chai-http");
let server = require('../../../app');
chai.should();
chai.use(chaiHttp);


 
describe("Suggestions Route Test",()=>{
 
it("It should GET the Link suggestions",(done)=>{
        chai.request(server)
        .get('/suggestions')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET wrong link ",(done)=>{
        chai.request(server)
        .get('/suggestions/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            // console.log(res);
        done();
        })
    })
})