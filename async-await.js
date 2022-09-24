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
        }, 2000);
    })
}

async function run() {
    const user= await getUser(22);
console.log(user);
}
run();