// Al cargar la página, iniciamos las animaciones
window.addEventListener('load', () => {
  document.body.classList.remove("container");
});

// Cargar API de YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
let bgMusicPlayed = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '1',
    width: '1',
    videoId: 'u0q3Vz8FkqE', // Vicente Fernández - Volver Volver
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      'loop': 1,
      'playlist': 'u0q3Vz8FkqE',
      'modestbranding': 1
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  // El reproductor está listo
}

const startMusic = () => {
  if (bgMusicPlayed) return;
  
  if (player && player.playVideo) {
    player.playVideo();
    player.setVolume(100);
    bgMusicPlayed = true;
  }
};

// Escuchamos clics para activar la música y el efecto de corazones
window.addEventListener('click', function(e) {
  startMusic();

  // Efecto visual de corazones al hacer clic
  var heart = document.createElement('div');
  heart.className = 'click-heart';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  document.body.appendChild(heart);

  // Eliminar el corazón después de la animación
  setTimeout(function() {
    heart.remove();
  }, 1000);
});
