let chai=require("chai");
let chaiHttp=require("chai-http");
let server = require('../../../app');

chai.should();
chai.use(chaiHttp);



describe("interestingNews Route Test",()=>{


it("It should GET the Link interesting_news",(done)=>{
            chai.request(server)
            .get('/interesting_news')
            .end((err,res)=>{
                res.should.have.status(200);
                // console.log(res);
            done();
            })
        })
        it("It should GET the Link interesting_news/edit",(done)=>{
            chai.request(server)
            .get('/interesting_news/edit')
            .end((err,res)=>{
                res.should.have.status(200);
                // console.log(res);
            done();
            })
        })
        it("It should GET the Link interesting_news/delete",(done)=>{
            chai.request(server)
            .get('/interesting_news/delete')
            .end((err,res)=>{
                res.should.have.status(200);
                // console.log(res);
            done();
            })
        })
        it("It should GET wrong link ",(done)=>{
            chai.request(server)
            .get('/interesting_news/not_found_link')
            .end((err,res)=>{
                res.should.have.status(404);
                // console.log(res);
            done();
            })
        })
    })