import express from 'express';
import routers from './routers/studentRouters.js';
const app = express();
app.use(express.json())
app.use('/',routers);
//app.get('/',(req,res)=>{
   // res.send("hello this is from backend");
//})
app.listen(7007,()=>{
    console.log("server running at port 7007")
});