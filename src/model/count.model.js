const mongoose = require("mongoose");


const likesSchema = new mongoose.Schema(
    {
count:{type:String,required:false},
//like:{type:String,required:true}
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const Like = mongoose.model("like",likesSchema);

module.exports = Like;
