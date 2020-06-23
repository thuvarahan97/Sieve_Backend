let chai=require("chai");
let chaiHttp=require("chai-http");
let server = require('../../../app');

//Assertion Style
chai.should();
chai.use(chaiHttp);


describe('Admin route test',()=>{
    it("It should GET the Link Admin route ",(done)=>{
        chai.request(server)
        .get('/')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET the Admin route login ",(done)=>{
        chai.request(server)
        .get('/login')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET the Link Admin route signup ",(done)=>{
        chai.request(server)
        .get('/signup')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET the Link Admin route logout ",(done)=>{
        chai.request(server)
        .get('/logout')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET wrong link ",(done)=>{
        chai.request(server)
        .get('/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            // console.log(res);
        done();
        })
    })



})