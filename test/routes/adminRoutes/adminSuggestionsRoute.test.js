//  let chai=require("chai");
// let chaiHttp=require("chai-http");
// let server = require('../../../app');
// chai.should();
// chai.use(chaiHttp);


 
// describe("Suggestions Route Test",()=>{
 
// it("It should GET the Link suggestions",(done)=>{
//         chai.request(server)
//         .get('/suggestions')
//         .end((err,res)=>{
//             res.should.have.status(200);
//             // console.log(res);
//         done();
//         })
//     })
//     it("It should GET wrong link ",(done)=>{
//         chai.request(server)
//         .get('/suggestions/not_found_link')
//         .end((err,res)=>{
//             res.should.have.status(404);
//             // console.log(res);
//         done();
//         })
//     })
// })

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../../../app');
let url = require('../../appURL');

chai.should();
chai.use(chaiHttp);

var agent = chai.request.agent(url.server);

describe("adminSuggestions Route Test",()=>{
    it("It should perform user login",(done)=>{
        agent
            .post('/login')
            .send({ 
                email: 'meenusivarasan@gmail.com',
                password: 'Meenu123+' 
            })
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            })
    })
    it("It should GET the link suggestions",(done)=>{
        agent
        .get('/suggestions')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })})
        it("It should GET wrong link and render 404 page",(done)=>{
            agent
            .get('/suggestions/not_found_link')
            .end((err,res)=>{
                res.should.have.status(404);
                done();
            })
        })
    })