const express = require("express");
const router = express.Router();
const v1 = require("../model/likes.model");

router.get("", async(req,res)=>{
    try {
        const v2 = await v1.find().lean().exec();
        return res.status(200).send(v2);
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});

router.post("", async(req,res)=>{
    try {
        const v2 = await v1.create(req.body);
        console.log(v2)
        return res.status(200).send(v2);
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});



module.exports = router;