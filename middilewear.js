import express from 'express';
const app=express();
app.use(express.json());
app.get('/get-user',(req,res)=>{
    res.send("api success");
})
app.post('/add-user',(req,res)=>{
    let data =req.body;
    console.log(data);//undefined
    //logic to add into your data base
    
})
app.put('/edit-user',(req,res)=>{
    let mydata=req.body
    console.log(mydata)
    res.end("data edited")
});
app.listen(5000,() =>{
    console.log("server running at 5000")

})