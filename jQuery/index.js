$("h1").addClass("big-title margin-50");
$("a").attr("href","https://www.yahoo.com");
$("h1").click(function(){
    $("h1").css("color","purple");
});

$("button").click(function(){
    $("button").css("background-color","purple");
});

// this is for listening for the key strokes given in the input area
$("input").keydown(function(event){
    $("h1").text(event.key);
});

// this is for listening for the key strokes given in the complete website(any where)
/*
$("body").keydown(function(event){
    $("h1").text(event.key);
});

or
$(document).keydown(function(event){
    $("h1").text(event.key);
});
*/

//this is for detecting all the events using jQuery
$("h1").on("mouseover",function(){
    $("h1").css("color","red");
});

// function for animation
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});