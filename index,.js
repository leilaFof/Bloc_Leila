const express = require("express");
const mongoose = require("mongoose");
const app = express();
const statusCodes=require('http-status-codes')
const port = 3000;
//appler les fichier static
app.use(express.static("public"));
app.set('view engine','ejs')

//les routes
app.get("/", (req, res) => {
  res.send("ok");
});
 app.get("/hello/:name",(req,res)=>{
    res.render("index")
    console.log(req.params.name);
 })
app.use((req, res, next) => {

  res.status(statusCodes.NOT_FOUND).send("on ne peux pas trouver la page");
});

app.listen(port, () => {
  console.log(`le serveur est lancer sur le port ${port}`);
});
