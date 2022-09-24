const express=  require('express');
var mysql = require('mysql');
const app =express();
coures=['1','2'];
users=[];
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "stock"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM users", function (err, result) {
      if (err) throw err;
      users= result;
    });
  });
  

app.get('/api/courses',(req,res)=>{
   // res.send(coures);
    res.send(users);
})
const PORT =3000 || process.env.PORT;
    app.listen(PORT,()=>{
        console.log(`app runing in ${PORT} Good,`);
    })




 