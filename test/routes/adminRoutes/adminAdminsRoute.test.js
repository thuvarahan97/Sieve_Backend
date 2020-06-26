let chai=require("chai");
let chaiHttp=require("chai-http");
let server = require('../../../app');
chai.should();
chai.use(chaiHttp);


describe("AdminAdmins Route test",()=>{
//not normal admin can see admin menu


it("It should GET the Link admin_menu",(done)=>{
        chai.request(server)
        .get('/admins')
        .end((err,res)=>{
            res.should.have.status(500);
            // console.log(res);
        done();
        })
    })

    it("It should GET the Link admin_menu/update",(done)=>{
        chai.request(server)
        .get('/admins/update')
        .end((err,res)=>{
            res.should.have.status(500);
            // console.log(res);
        done();
        })
    })
    it("It should GET the Link admin_menu/update_no",(done)=>{
        chai.request(server)
        .get('/admins/update_no')
        .end((err,res)=>{
            res.should.have.status(500);
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