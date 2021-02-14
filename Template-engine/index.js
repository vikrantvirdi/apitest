const express = require('express');
const path =require('path');
const app = express();
const port =8000;
//build in middleware
const staticPath =path.join(__dirname,"public");
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("vikugi");
});
app.listen(port,()=>{
    console.log(`listeninng `)
});