/* Keys = q, w, e, r, t, y*/
window.addEventListener('keydown', (e) => playSound(e))

function playSound(e) {
   const key = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const soundKey = document.querySelector(`.string[data-key="${e.keyCode}"]`);

   if (!key) return;

   if (key.paused) {
      key.play();
      soundKey.classList.add('active')
      checkSound('active', soundKey)
     
   } else {
      key.pause()
      key.currentTime = 0;  //restart sound
      soundKey.classList.remove('active')
   }

}

function checkSound(className, key) {
   const element = document.querySelector(`.${className}`);
   element.addEventListener('transitionend', (e) => {
      key.classList.remove(`.${className}`)
   }, false)
}