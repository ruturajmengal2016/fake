const express = require("express");
const app = express();

app.use(express.json())
app.get("/",(req,res)=>{
    res.json(req.body)
})

app.use((err,req,res,next)=>{
    res.json({message:err})
    next()
})
app.listen(5500,()=>{
    console.log(`server listening... on port ${5500}`)
})