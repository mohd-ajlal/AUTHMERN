// change file name from connSample.js to conn.js

const mongoose = require("mongoose");

const DB = 'mongodb://localhost:27017/Authusers'

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})