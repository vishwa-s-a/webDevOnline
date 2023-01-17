const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

//route for home page
app.get("/",function(req,res){
    //console.log(__dirname);
    //res.send("<h1>Hello World</h1>");
    // for sending html files as response we use sendFile method
    //__dirname  gives the present location of the file system in any computer or cloud
    res.sendFile(__dirname+"/index.html");
})
//route for bmi page
app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})


app.post("/",function(req,res){
    //console.log(req.body);
    //console.log(req.body.num1);// this gives the num1 value in the console
    var number1=+(req.body.num1);// here "+" is put to typecast the string into number
    var number2=Number(req.body.num2);// here we can also use Number() function to do the same
    var result=number1+number2;
    res.send("The sum of the two numbers is :"+result);
});


app.post("/bmiCalculator",function(req,res){
    var weight=+(req.body.weight);
    var height=+(req.body.height);
    var bmi=weight/(height*height);
    bmi=bmi.toFixed(2);
    res.send("<h4>The BMI of the person is :</h4>"+bmi);
})
app.listen(3000,function(){
    console.log("server started at port:3000");
})