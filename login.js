
var knex = require('./connection')
const express=require("express");
const router = express.Router()


router.post("/post/login",(req,res)=>{
  // res.send(req.body)
  knex.select("*").from('users2').then((data)=>{
      // res.send(data);
      var a=false;
      let email= req.body.email
      let password=req.body.password
      for(i of data){
        if(i.email==email && i.password==password){
          a=true
        }
       
        
        
        // console.log(i.first_name);
        // console.log(i.email);
      }
      if(a){
        console.log("loging sucess");
      }
      else{
        console.log("your email or password is wrong");
      }
  })


})
module.exports=router;
