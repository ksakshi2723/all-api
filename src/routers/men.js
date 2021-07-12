const express=require("express");
const router=new express.Router();
const MensRanking=require("../models/mens");

//handle post request and new data insert
router.post("/mens",async(req,res)=>{
    try{
    console.log(req);
     console.log("post",req.body);
     const addingMensRecords=new MensRanking(req.body);
     const insertMens= await addingMensRecords.save();
     res.status(201).send(insertMens)

    }catch(e){
    res.status(400).send(e);   
    }
})

router.get("/mens",async(req,res)=>{
    try{
       const getMens=await MensRanking.find({}).sort({"ranking":1});
    console.log(req);
    res.send(getMens)

    }catch(e){
    res.status(400).send(e);   
    }
})

//particular data

router.get("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen=await MensRanking.findById(_id);
    res.send(getMen);

    }catch(e){
    
    res.status(500).send(e);   
    }
})
//patch use for update
router.patch("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen=await MensRanking.findByIdAndUpdate(_id,req.body, {
           new:true
        });
    res.send(getMen);

    }catch(e){
    
    res.status(500).send(e);   
    }
})
//delete
router.delete("/mens/:id",async(req,res)=>{
    try{
    
        const getMen=await MensRanking.findByIdAndDelete(req.params.id);
        res.send(getMen);

    }catch(e){
    
    res.status(500).send(e);   
    }
})

module.exports=router;