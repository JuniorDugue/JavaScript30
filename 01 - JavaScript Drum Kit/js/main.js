window.addEventListener('keydown', function (e){
  // console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return; //this stops function from running all together
  console.log(audio);
  audio.currentTime = 0; //rewind to the start
  audio.play();
});