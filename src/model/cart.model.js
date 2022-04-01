const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
name:{type:String,required:false},
desc:{type:String,required:false},
img:{type:String,required:false},
color:{type:String,required:false},
quan:{type:Number,required:false},
price:{type:Number,required:false}
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const Cart = mongoose.model("cart",cartSchema);

module.exports = Cart;