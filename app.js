const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const audio = document.querySelector(".audio audio");
const seasons = document.querySelectorAll(".season");
const video = document.querySelector(".video video");
const durations = document.querySelectorAll(".duration");
const path = document.querySelector(".rect2");
const remainingTimeEl = document.querySelector(".audio-remaining-time");

play.addEventListener("click", function(){
 audio.play();
 update();
});

pause.addEventListener("click", function(){
 audio.pause();
});

seasons.forEach(season =>{
 season.addEventListener("click",() => {
  video.src = season.getAttribute("video-src");
 });
});

let audioDuration = 120;
durations.forEach(duration =>{
 duration.addEventListener("click", function(){
  audioDuration = duration.getAttribute("audio-duration");
  update();
 });
});

const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
function update(){
 if(audio.currentTime>=audioDuration){
  audio.pause();
  audio.currentTime = 0;
 }
 let portionPlayed = audio.currentTime / audioDuration;
 path.style.strokeDashoffset = - portionPlayed * pathLength;
let remainingTime = audioDuration-audio.currentTime;
renderRemainingTime(remainingTime);
 if(!audio.paused){
 requestAnimationFrame(update);
 }
}
update();

function renderRemainingTime(time){
 let min = Math.floor(time/60);
 let sec = Math.floor(time%60);
 min = min<10? `0${min}`:min;
 sec = sec<10? `0${sec}`:sec;
 remainingTimeEl.innerHTML = `${min}:${sec}`;
}