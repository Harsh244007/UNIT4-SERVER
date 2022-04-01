const express = require('express');
const app = express();
const cors=require("cors")
app.use(cors());
//app.use(express.json());
// app.use(auth)

// function auth(req, res, next) {
// let b=[];
// b.push(req.url)
//     if(b.includes(req.url)){
//         console.log(req.url)
//     next();}
//     else{
//         return res.send("Invalid")
//     }
// }

const bargainsController = require("./controller/bargains.controller");
const beautyController = require("./controller/beauty.controller");
const brandsController = require("./controller/brands.controller");
const etcnController = require("./controller/etcn.controller");
const etcsController = require("./controller/etcs.controller");
const giftsController = require("./controller/gifts.controller");
const homestopController = require("./controller/homestop.controller");
const kidsController = require("./controller/kids.controller");
const luxeController = require("./controller/luxe.controller");
const mensController = require("./controller/mens.controller");
const watchController = require("./controller/watch.controller");
const womenController = require("./controller/women.controller");

const likesController = require("./controller/likes.controller");
app.use("/likes", likesController)

app.use("/bargains", bargainsController)
app.use("/beauty", beautyController)
app.use("/brands", brandsController)
app.use("/etcn", etcnController)
app.use("/etcs", etcsController)
app.use("/gifts", giftsController)
app.use("/homestop", homestopController)
app.use("/kids", kidsController)
app.use("/luxe", luxeController)
app.use("/mens", mensController)
app.use("/watch", watchController)
app.use("/women", womenController)

module.exports = app;
