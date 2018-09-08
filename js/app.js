/* Keys = q, w, e, r, t, y*/
window.addEventListener('keydown', (e) => {

   const key = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const soundKey = document.querySelector(`.string[data-key="${e.keyCode}"]`);



   if (!key) return;

   if (key.paused) {
      key.play();
      soundKey.classList.add('active')
   } else {
      key.pause()
      key.currentTime = 0;  //restart sound
      soundKey.classList.remove('active')
   }

})

