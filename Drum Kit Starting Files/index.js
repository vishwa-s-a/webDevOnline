// these lines of code works for only button
/*
document.querySelector("button").addEventListener("click",handleClick);//even though handleclick is function dont put parenthesis
// for it in this above line as it directly makes the function call
function handleClick()
{
    alert("I got clicked");
}
*/


// this section of code is for detecting the mouse clicks or the keyboard clicks
// now to make the same for all buttons
var NoOfBtns=document.querySelectorAll(".drum").length;
for(var i=0;i<NoOfBtns;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonHtml=this.innerHTML;
        clickSound(buttonHtml);
        buttonAnime(buttonHtml);
    });
}
// this is keyboard event listener
document.addEventListener("keydown",function(event){
    //alert("The key was pressed");
    //console.log(event);
    clickSound(event.key);
    buttonAnime(event.key);
})

//

// this is the function to play the relevant sounds
function clickSound(word)
{
    switch (word) {
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
}


//a function to animate the pressed key
function buttonAnime(key)
{
    var activeButton=document.querySelector("."+key);
    // in below lines the class which is added is "pressed" which has some styles in css file check it out once
    activeButton.classList.add("pressed");// this permanently applies the animation but we need to remove it
    // for removing we use timeout functions of java Script

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

//some random function for testing
function handleClick()
{
    //alert("I got clicked"); instead of alert we are going to play sound now
    var audio=new Audio('sounds/tom-1.mp3');
    audio.play();
}



