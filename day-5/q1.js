let promise = new Promise((res ,rej)=>{
    let message = true
    if(message){
        res('i am true')
    }else{
        rej('i am wrong')
    }
})
promise.then((mess)=>console.log(mess)).catch((err)=>{console.log(err)})