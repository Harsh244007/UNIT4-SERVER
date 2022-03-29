const mongoose = require("mongoose");


const giftsSchema = new mongoose.Schema(
    {
img: {type:String, required:true},
name: {type:String, required:false,unique:true},    
price: {type:Number, required:true},
strikeprice: {type:Number, required:true},
description: {type:String, required:true},
off: {type:Number, required:true},
rightimg: {type:String, required:false},
frontimg: {type:String, required:false},
halfimg: {type:String, required:false},
backtimg: {type:String, required:false}
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const Gifts = mongoose.model("gift",giftsSchema);

module.exports = Gifts;