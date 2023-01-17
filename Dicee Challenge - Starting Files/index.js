var randomNumber1=Math.random();
randomNumber1=(randomNumber1*5)+1;
randomNumber1=Math.round(randomNumber1);
var leftdice="images/dice"+randomNumber1+".png";
document.querySelector(".left").setAttribute("src",leftdice);

var randomNumber2=Math.random();
randomNumber2=(randomNumber2*5)+1;
randomNumber2=Math.round(randomNumber2);
var rightdice="images/dice"+randomNumber2+".png";
document.querySelector(".right").setAttribute("src",rightdice);
if(randomNumber1==randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw";
}
else if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";

}