let chai=require("chai");
let chaiHttp=require("chai-http");
let server = require('../../../app');

chai.should();
chai.use(chaiHttp);




describe("PrivacyLawsRoute Test",()=>{

it("It should GET the Link privacy_laws",(done)=>{
        chai.request(server)
        .get('/privacy_laws')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET the Link privacy_laws/add",(done)=>{
        chai.request(server)
        .get('/privacy_laws/add')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET the Link privacy_laws/edit",(done)=>{
        chai.request(server)
        .get('/privacy_laws/edit')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET the Link privacy_laws/delete",(done)=>{
        chai.request(server)
        .get('/privacy_laws/delete')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET wrong link ",(done)=>{
        chai.request(server)
        .get('/privacy_laws/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            // console.log(res);
        done();
        })
    })
})