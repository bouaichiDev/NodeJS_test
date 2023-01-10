/**/const http=require('http');
const path =require('path');
const fs =require('fs');
const fsPromises=require('fs').promises;
const url = require('url');

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    if(req.url==="/")
    {
        fs.readFile("./index.html","utf-8",(err,data)=>{
            res.write(data);
            res.end();
        })

    }
    else if(req.url==="/about")
    {
        fs.readFile("./about.html","utf-8",(err,data)=>{
            res.write(data);
            res.end();
        })

    }
    else if(req.url==="/contact")
    {
        fs.readFile("./contact.html","utf-8",(err,data)=>{
            res.write(data);
            res.end();
        }) 

    }
    else
    {
        fs.readFile("./404.html","utf-8",(err,data)=>{
            res.write(data);
            res.end();
        })

    }
    //console.log(req.url,req.method);

}).listen("8080")
/*
const server =http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("Hello");
    console.log(req.url,req.method);

})
const PORT =process.env.PORT||3500;
server.listen(PORT,()=>console.log(`Server is runing in ${PORT}`));
*/
// const p= new Promise((result,error)=>{
//     const statut =false;
//         if (statut) {
//             result({'id':1,'name':'badr'});
//         } else {
//             error(new Error('Not Founds'));
//         }
// })

// p.then((user)=>{console.log(user)}).catch((err)=>{console.log(err.message)})

// function getRepot(id) {
//     return new Promise((result,error)=>{
//         setTimeout(() => {
//             console.log('Repot get .....');
//             result({'userID':id,'name':'Repot badr'});
//         }, 2000);
//     })
// }
// function getUser(id) {
//     return new Promise((result,error)=>{
//         setTimeout(() => {
//             console.log('User get .....');
//             result({'id':id,'name':'badr'});
//         }, 2000 );
//     })
// }
// console.log('BEGIN');
// getUser(22).then((user)=>{
//     console.log("Here we go user",user);
//     return getRepot(user.id);
// }).then((repot)=>{
//     console.log("Here we go repot",repot);
// });
  console.log('END');