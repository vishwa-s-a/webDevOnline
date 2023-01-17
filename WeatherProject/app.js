const express=require("express");
const https=require("https");// here this https is a native module so we need not install it using npm
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    //only one res.send has to be there otherwise it is going to crash the server so comment this out
    //res.send("Server is up and running");
    // but we can have as many as possible res.write() methods
});

app.post("/",function(req,res){
    //onsole.log("post received");
    //console.log(req.body.cityName);
    const query=req.body.cityName;
    const apiKey="ccc59e78f49653b52732e36b258d4d65";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&units=metric&appid="+apiKey;
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            // here the data is in hexadecimal form so we use JSON parser method to get the json form of data
            const weatherData=JSON.parse(data);
            //console.log(weatherData);
            // just for extra learning
            //taking a js object and compressing it to a shortest form possible
            /*
            const object={
                name:"Angela",
                favouriteFood:"Ramen"
            }
            console.log(JSON.stringify(object));
            */
            //end of learning
            const temp=weatherData.main.temp;
            const descript=weatherData.weather[0].description;
            const icon=weatherData.weather[0].icon;
            const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            console.log(temp);
            console.log(weatherData.weather[0].description);
            res.write("<h1>The temperature in "+query+" is "+temp+" degree Celcius.</h1>");
            res.write("<p> The weather is currently "+descript+"</p>");
            res.write("<img src="+imageURL+">");
            res.send();
            
        });
    }); 
});

app.listen(3000,function() {
   console.log("Server is running on port:3000"); 
});


