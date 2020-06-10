let chai=require("chai");
let chaiHttp=require("chai-http");
let server = require('../app');

//Assertion Style
chai.should();
chai.use(chaiHttp);

//The HyperText Transfer Protocol (HTTP) 301 Moved Permanently redirect status response code indicates that the resource requested has been definitively moved to the URL given by the Location headers.
//The HTTP response status code 302 Found is a common way of performing URL redirection. The HTTP/1.0 specification initially defined this code, and gave it the description phrase "Moved Temporarily" rather than "Found". An HTTP response with this status code will additionally provide a URL in the header field Location.
//200 OK sucess status
describe('Getting Link',()=>{
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
    })
    
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
    it("It should GET the Link suggestions",(done)=>{
        chai.request(server)
        .get('/suggestions')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
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
    it("It should GET the Link admin_menu",(done)=>{
        chai.request(server)
        .get('/')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })

    it("It should GET the Link users",(done)=>{
        chai.request(server)
        .get('/users')
        .end((err,res)=>{
            res.should.have.status(200);
            // console.log(res);
        done();
        })
    })
    // it("It should post object",(done)=>{
    //     chai.request(server)
    //     .get('/admins')
    //     .end((err,res)=>{
    //         // res.should.have.status(200);
    //         res.should.be.a('object');
    //         res.body.should.have.property('admin_id');
    //         // console.log(res);
    //     done();
    //     })
    // })
    


})

