// const p= new Promise((result,error)=>{
//     const statut =false;
//         if (statut) {
//             result({'id':1,'name':'badr'});
//         } else {
//             error(new Error('Not Founds'));
//         }
// })

// p.then((user)=>{console.log(user)}).catch((err)=>{console.log(err.message)})

function getRepot(id) {
    return new Promise((result,error)=>{
        setTimeout(() => {
            console.log('Repot get .....');
            result({'userID':id,'name':'Repot badr'});
        }, 2000);
    })
}
function getUser(id) {
    return new Promise((result,error)=>{
        setTimeout(() => {
            console.log('User get .....');
            result({'id':id,'name':'badr'});
        }, 2000 );
    })
}
console.log('BEGIN');
getUser(22).then((user)=>{
    console.log("Here we go user",user);
    return getRepot(user.id);
}).then((repot)=>{
    console.log("Here we go repot",repot);
});
console.log('END');