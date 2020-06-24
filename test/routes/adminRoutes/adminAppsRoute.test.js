let chai=require("chai");
let chaiHttp=require("chai-http");
let server = require('../../../app');

//Assertion Style
chai.should();
chai.use(chaiHttp);


describe('App route test',()=>{
    it("It should GET the Link app route ",(done)=>{
        chai.request(server)
        .get('/apps')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })

    it("It should GET the Link apps/add",(done)=>{
        chai.request(server)
        .get('/apps/add')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    
    it("It should GET the Link apps/edit ",(done)=>{
        chai.request(server)
        .get('/apps/edit')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET the Link apps/delete ",(done)=>{
        chai.request(server)
        .get('/apps/delete')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET wrong link ",(done)=>{
        chai.request(server)
        .get('/apps/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            // console.log(res);
        done();
        })
    })
})