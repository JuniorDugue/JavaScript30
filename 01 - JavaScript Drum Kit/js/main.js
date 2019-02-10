  function playSound(e){
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
      if (!audio) return; //this stops function from running all together
      // console.log(audio);
      audio.currentTime = 0; //rewind to the start
      audio.play();
      // key.addClass("playing") jQuery way
      key.classList.add("playing"); //to turn the class on
      // key.classList.toggle("playing"); to turn the class on and off 
      // key.classList.remove("playing"); to turn the class off
      // console.log(key);
  }

function removeTransition(e){
  if (e.propertyName !== "transform") return; //skip it if it's not a transform
  console.log(e.propertyName);

  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
  