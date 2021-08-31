const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const ejs=require("ejs");
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:false}));
app.get("/",function(req,res){
  res.render("home");
});
app.listen(3000 || process.env.PORT,function(){
  console.log("Server is up and running");
})
