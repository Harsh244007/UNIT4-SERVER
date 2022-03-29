const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://harsh:harsh@harshexpressproject.vfag6.mongodb.net/test");
}

module.exports = connect;