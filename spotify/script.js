console.log("Welcome to Spotify");

//initialise the variables
let songIndex=0;
let audioElement=new Audio("songs/1.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {songName:"Random-song-1-NCS",filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Random-song-2-NCS",filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Random-song-3-NCS",filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Random-song-4-NCS",filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Random-song-5-NCS",filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Random-song-6-NCS",filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Random-song-7-NCS",filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Random-song-8-NCS",filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Random-song-9-NCS",filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},

]

songItems.forEach((element,i)=>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


//audioElement.play();


//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekBar
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    })
})