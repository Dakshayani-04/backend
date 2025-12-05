import express from 'express';
const app = express();
app.get('/',(req,res)=>{
    res.send("hello this is from backend");
})
app.listen(7007,()=>{
    console.log("server running at port 7007")
});