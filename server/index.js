const express = require('express');
const authRouter = require("./routes/auth.js");
const mongoose= require('mongoose');
const app= express()
const PORT= 3000;
const bodyParser = require('body-parser');
const  db='mongodb+srv://shagun2001ch:4uvVpyiVBxDSNVI9@cluster0.ocfw8wq.mongodb.net/';


app.use(express.json());
app.use(authRouter);
app.use(bodyParser.json());


mongoose.connect(db).then(()=>{
    console.log("connection successfully");
})
.catch(
    (e)=>{
        console.log(e);
    }
)




app.listen(PORT,()=>{
    console.log(`Connected at port ${PORT}`);
})

