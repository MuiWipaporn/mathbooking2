var connection = require('../sequelize');
module.exports.register=function(req,res){
    var today = new Date();
    var users={
        "username":req.body.username,
        "email":req.body.email,
        "password":req.body.password,
    
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
    
}