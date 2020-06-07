// // var db=require('../utils/database');
// // it('db.connection.connect should ...', function() {
// //     db.getConnection(function(err, result) {
// //         if(err){
            
// //             return;
// //         }
// //         expect(result).to.equal("Database is connected");
        
// //     });
// // });
// var mysql=require('../utils/database');

// // describe('Access to DB', function(){
// //     describe('#Pass', function(){
// //          it('should return -1 because wrong credentials', function(done){
// //              var connection = mysql.getConnection({
// //                  host: 'local host',
// //                  user: 'root',
// //                  password: '',
// //                  database: 'sieve'
// //              });
// //              connection.connect(done);
// //          });
// //      })
// //  });
// describe('Access to DB', function(){
//     describe('#fail', function(){
//          it('should return -1 because wrong credentials', function(done){
//              var connection = mysql.createConnection({
//                  host: 'right host',
//                  user: 'wrong user',
//                  password: 'wrong password',
//                  database: 'right database'
//              });
//              connection.connect(done);
//          });
//      })
//  });