const express=require("express");
const app=express();


// these are various routes 
app.get("/",function(request,response){
    // here / refers to the home page
    //console.log(request);
    response.send("<h1>hello World</h1>");
});

app.get("/contact",function(req,res){
    // here it will give this response when we reach the contact page
    // here we can use res instead of response
    res.send("Contact me at: shiva801@proton.me");
});

//nodemon just restarts the server when ever there is a change in the source code
app.get("/aboutme",function(request,response){
    // here / refers to the home page
    //console.log(request);
    response.send("<h1>My name is Vishwa </h1>");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});