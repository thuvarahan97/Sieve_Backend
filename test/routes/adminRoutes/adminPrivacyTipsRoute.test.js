let chai=require("chai");
let chaiHttp=require("chai-http");
let server = require('../../../app');

//Assertion Style
chai.should();
chai.use(chaiHttp);




describe('PrivacyTipsRoute Test',()=>{
    it("It should GET the Link privacy_tips ",(done)=>{
        chai.request(server)
        .get('/privacy_tips')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })

    it("It should GET the Link privacy_tips/add",(done)=>{
        chai.request(server)
        .get('/privacy_tips/add')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    
    it("It should GET the Link privacy_tips/edit ",(done)=>{
        chai.request(server)
        .get('/privacy_tips/edit')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    it("It should GET the Link privacy_tips/delete ",(done)=>{
        chai.request(server)
        .get('/privacy_tips/delete')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    });
    it("It should GET the Link privacy_tips/wrongLink ",(done)=>{
        chai.request(server)
        .get('/privacy_tips/wrong_link')
        .end((err,res)=>{
            res.should.have.status(404);
            // console.log(res);
        done();
        })
    });

})