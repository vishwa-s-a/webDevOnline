const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");// as this is a local node module created by us

const app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

// here we can also declare this newWorks as const also as this will not affect that much
var newWorks=["Buy food","Eat food","Cook food"];// declaring it as array so we store the values
let workItems=[];
app.get("/",function(req,res)
{
    let day=date.getDate();// we are using module.export() function and const date so we are able to access date.js
    // can also getDay function by: date.getDay()
    res.render("list",{kindOfDay:day, works:newWorks});// here we can also use day:day for this we should declare var as day in above lines
    res.send();// usually send() is the last closing instruction in get() method
    // so it should be there even if it is empty
})

app.post("/",function(req,res){
    var newItem=req.body.work;
    if(req.body.list==="Work")
    {
        workItems.push(newItem);
        res.redirect("/work");
    }
    else{
        newWorks.push(newItem);
        res.redirect("/");
    }
    // console.log("The new work is "+newWorks);
    //res.send("Your work is added successfully");
    //res.render("list",{newItem:newWork}); this will give error
    
})

//creating another route for work
app.get("/work",function(req,res)
{
    res.render("list",{kindOfDay:"Work List",works:workItems});
    // here "list" is the file name list.ejs
})

app.post("/work",function(req,res){
    let item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.get("/about",function(req,res){
    res.render("about");
})


app.listen(3000,function(){
    console.log("server started on port: 3000");
}) 
