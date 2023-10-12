var con=require('./connection');
var express = require("express");
var app     = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
  });
  app.post('/',function(req,res){
    //console.log(req.body);
    var name=req.body.name;
    var name1 =req.body.name1;
    vtu1 =req.body.vtu1;
    var name2 =req.body.name2;
    vtu2 =req.body.vtu2;
    var name3 =req.body.name3;
    vtu3 =req.body.vtu3;
    var title =req.body.title;
    var Supervisor =req.body.Supervisor;
    
    con.connect(function(error) {
        if (error) throw error;
       
        var sql = "INSERT INTO projects (name, name1,vtu1,name2, vtu2, name3, vtu3, title, Supervisor) VALUES ('"+name+"', '"+name1+"','"+vtu1+"','"+name2+"','"+vtu2+"','"+name3+"','"+vtu3+"','"+title+"', '"+Supervisor+"')";
        con.query(sql, function (error, result) {
            if (error) throw error;
            res.send("student registered successfuly"+result.insertId);
             res.end();
    });
  
    });
});
  app.listen(7000);
