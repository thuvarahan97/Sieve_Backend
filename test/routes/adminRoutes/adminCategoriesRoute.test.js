let chai=require("chai");
let chaiHttp=require("chai-http");
let server = require('../../../app');

chai.should();
chai.use(chaiHttp);


 
 describe("Categories Route Test",()=>{


 it("It should GET the Link categories",(done)=>{
        chai.request(server)
        .get('/categories')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET the Link categories/add",(done)=>{
        chai.request(server)
        .get('/categories/add')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET the Link categories/edit",(done)=>{
        chai.request(server)
        .get('/categories/edit')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET the Link categories/delete",(done)=>{
        chai.request(server)
        .get('/categories/delete')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET wrong link ",(done)=>{
        chai.request(server)
        .get('/categories/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            // console.log(res);
        done();
        })
    })
})