let b =()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(10);
        }, 2000);
    })
}
(async()=>{
    await b();
    console.log("Hello")
    await b();
    console.log("Hello 2")
})()