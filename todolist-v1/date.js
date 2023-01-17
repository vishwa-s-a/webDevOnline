module.exports.getDate=getDate;// dont give parenthesis here as it is just linking statement not a call statement
// by adding this export method of module we are able to tap this function and data where ever is required
function getDate(){
    var today=new Date();// here we are creating a object of Date() class
    var options={
        weekday:"long",// this will be in words
        day:"numeric",// this will be in numbers
        month:"long"
    };
    let day=today.toLocaleDateString("en-US",options);
    return day;
}

// instead of module.exports we can say exports, this is also fine and good to go
exports.getDay=getDay;
function getDay(){
    let today=new Date();
    let options={
        weekday:"long"

    };
    let day=today.toLocaleDateString("en-US",options);
    return day;

}  
//module.exports is a object so can have many properties
// console.log(module.exports);

// one more way of writing this module.exports is by using anonymous functions like this

/*
    module.exports.getDay=function(){
        let today=new Date();
        let options={
            weekday:"long"

        };
        let day=today.toLocaleDateString("en-US",options);
        return day;
    }
*/



    //var currentDay=today.getDay();// here getDay() is a method of Date() class, and gives result as 0 for sunday
    // 1 for monday like this continues and 6 for saturday
    // if(currentDay===6 || currentDay===0)
    // {
    //     day="weekend";
    //     //res.render("list",{kindOfDay:day});// here this line of code looks for list.ejs in views folder every time
    //     // so it is compulsory to keep all ejs files in views folder
    // }
    // else{
        
    //     day="weekday";
    // }
