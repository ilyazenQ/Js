(function () {
   'use strict';

   const wrapper = document.getElementById('main-page');
   const pointerEl = document.getElementById('pointer');
   const circle = document.getElementById('circle-box');
   const heart = document.getElementById('heart-wrapper');
   const ghost = document.getElementById('ghost-container');

   
  
   function mouseOnCircle (e) {  
    heart.style.display = "table";
   }
   function mouseOnGhost(e) {  
    ghost.classList.remove('ghost-active');
    ghost.classList.add('ghost-container-pull');
    setTimeout( () => {
      ghost.classList.add('hidden');
        }, 9000);  
   }

  // function mouseLeaveCircle (e) {
  //  setTimeout(function () {
  //      heart.style.display = "none";
   // }, 15000);  
    
    //}
  
   function onMouseMove(event) {
       let mouseX = event.pageX;
       let mouseY = event.pageY;
       let crd = wrapper.getBoundingClientRect();
       let activePointer = 
       crd.left <= mouseX && mouseX <= crd.right 
       && crd.top <= mouseY 
       && mouseY <= crd.bottom;

       requestAnimationFrame(function movePointer() {
           if (activePointer) {
            pointerEl.classList.remove('hidden');
            pointerEl.style.left = Math.floor(mouseX) - 125 + 'px';
            pointerEl.style.top = Math.floor(mouseY) - 125  + 'px';
           } else {
            pointerEl.classList.add('hidden');
           }
       });
   }

   function disablePointer() {
       requestAnimationFrame(function hidePointer() {
         pointerEl.classList.add('hidden');
       });
   }

   wrapper.addEventListener('mousemove', onMouseMove, false);
   wrapper.addEventListener('mouseleave', disablePointer, false);

   circle.addEventListener('mousemove', mouseOnCircle, false);
  // circle.addEventListener('mouseleave', mouseLeaveCircle, false);
  ghost.addEventListener('mouseenter', mouseOnGhost, false);

})();