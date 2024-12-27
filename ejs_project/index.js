const express = require("express");
const app = express();
const port = 3000;

app.set("view engine","ejs");


app.get("/ig/:username",(req,res)=> {
    const username = req.params.username;
    const dataj = require("./views/data.json");
    const data = dataj[username];
    res.render("prr.ejs", {data});
    
})


app.listen(port,()=> {
    console.log(`server is running on port ${port}`);
})