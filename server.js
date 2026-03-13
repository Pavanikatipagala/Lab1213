const express= require("express");
const{add}=require("./utils")
const app=express();
app.get("/sum",(req,res)=>{
    const result=add(5,3);
    res.json({result});
});
if(require.main==module){
    app.listen(3000,()=>{
        console.log("server running on port 3000");
    });
}module.exports=app;