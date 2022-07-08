let songindex=0;
let audioplay=new Audio('songs/1.mp3');
let songitems=Array.from(document.getElementsByClassName("songitems"));
let myProgressBar=document.getElementById('file');
let btmsongname=document.getElementById('btmsongname');

let songs=[
    {songname:'Moonroof song jassmanak' ,cover:'images/1.jpg',filepath:'songs/1.mp3'},
    {songname:'Gamechanger jass manak ' ,cover:'images/2.jpg',filepath:'songs/2.mp3'},
    {songname:'Kuch tu ha arman malik' ,cover:'images/3.jpg',filepath:'songs/3.mp3'},
    {songname:'Tu mera dil falak shabir' ,cover:'images/4.jpg',filepath:'songs/4.mp3'}
];

masterplay.addEventListener('click',()=>{
    if (audioplay.paused || audioplay==0) {
        audioplay.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
  
        
    }
    else{
        audioplay.pause();
        
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity= 0;
    }
    btmsongname.innerHTML=songs[0].songname;

});


songitems.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].cover;
    element.getElementsByTagName("span")[0].innerHTML=songs[i].songname;

})


// update progressbsr with audio 

audioplay.addEventListener("timeupdate",()=>{
    progress=parseInt((audioplay.currentTime/audioplay.duration)*100);
    myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
    audioplay.currentTime=myProgressBar.value*audioplay.duration/100;
})


document.getElementById('next').addEventListener('click',()=>{
    if (songindex>=4) {
        songindex=0
        
    }else{
         songindex +=1;
    }
    audioplay.src=`songs/${songindex+1}.mp3`;
    btmsongname.innerHTML=songs[songindex].songname;
    audioplay.play();
    audioplay.currentTime=0;
    gif.style.opacity=1;
    masterplay.classList.add('fa-pause-circle');
    masterplay.classList.remove('fa-play-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if (songindex<=0) {
        songindex=0;
        
    }else{
        songindex -=1;
    }
    audioplay.src=`songs/${songindex+1}.mp3`;
    btmsongname.innerHTML=songs[songindex].songname;
    audioplay.play();
    audioplay.currentTime=0;
    gif.style.opacity=1;
    masterplay.classList.add('fa-pause-circle');
    masterplay.classList.remove('fa-play-circle');
})


//change song from div icons
songitems.forEach((element) => {
    // console.log(element);
    element.addEventListener('click',(e)=>{
        gif.style.opacity=1;
        console.log(parseInt(e.target.id));
        songindex=parseInt(e.target.id);
        btmsongname.innerHTML=songs[songindex].songname;
        audioplay.src=`songs/${songindex+1}.mp3`;
        e.target.classList.add('fa-pause-circle');
        e.target.classList.remove('fa-play-circle');
        audioplay.play();
        audioplay.currentTime=0;
        // masterplay.classList.remove('fa-play-circle');
        // masterplay.classList.add('fa-pause-circle');


    })
    
});