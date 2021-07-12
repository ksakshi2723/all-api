const express=require("express");
require("../src/db/conn");
const MensRanking=require("../src/models/mens");
const router = require("./routers/men");

const app=express();
app.use(express.json());
app.use(router);

const port=process.env.PORT || 3000;
app.get("/",async (req,res)=>{
    res.send("hiii")
})


app.listen(port,()=>{
    console.log("server is running");
})
