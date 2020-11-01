const express=require("express");
const app=express();
app.use(express.json())

app.use('/',require('./signup'))
app.use("/",require("./login"))





app.listen(2000,()=>{
    console.log("surver is running on 2000");
})