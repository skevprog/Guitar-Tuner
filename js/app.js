/* Keys = q, w, e, r, t, y*/
window.addEventListener('keydown', (e) => {

   const key = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   if (!key) return;

   if (key.paused) {
      key.play();
   } else {
      key.pause()
      key.currentTime = 0;  //restart sound
   }

})