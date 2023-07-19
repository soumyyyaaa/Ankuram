var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? pauseAudio() : playAudio();
}

function playAudio() {
  isPlaying = true;
  myAudio.play();
}

function pauseAudio() {
  isPlaying = false;
  myAudio.pause();
}

function stopAudio() {
    isPlaying = false;
    myAudio.pause();
    myAudio.currentTime = 0;
}

var volume = document.getElementById('volume-slider');
volume.addEventListener("change", function(e) {
    myAudio.volume = e.currentTarget.value / 100;
})