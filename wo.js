// scripts.js
function transitionToPage(event, href) {
    event.preventDefault();
    const overlay = document.getElementById('transition-overlay');
    const video = document.getElementById('transition-video');
  
    overlay.style.visibility = 'visible';
    video.play();
  
    video.onended = function() {
      window.location.href = href;
    };
  }
  