const mongoose = require("mongoose");

const connect = ()=>{
return mongoose.connect("mongodb+srv://harsh:harsh@harshexpressproject.vfag6.mongodb.net/test");
//return mongoose.connect("mongodb://127.0.0.1:27017/test")
}

module.exports = connect;