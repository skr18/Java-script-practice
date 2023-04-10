const express = require('express')
const app = express();
const PORT =3000
app.get('/',(req,res)=>{
    res.send("hello sujeet you have come a long way now you can not give up")
    console.log("wow")
})
app.get('/about',(req,res)=>{
    res.send("hello sujeet you have come a long way now you can not give up you dare")
    console.log("wow")
})
app.listen(PORT,()=>{
    console.log('app is running')
})