// Al cargar la página, iniciamos las animaciones
window.addEventListener('load', () => {
  document.body.classList.remove("container");
});

let bgMusicPlayed = false;

const startMusic = () => {
  if (bgMusicPlayed) return;
  
  const iframe = document.getElementById('bgMusic');
  if (iframe) {
    // IMPORTANTE: Los navegadores bloquean iframes en 'display: none'.
    // Lo hacemos visible pero ínfimo y fuera de la vista.
    iframe.style.display = "block";
    iframe.style.position = "fixed";
    iframe.style.width = "1px";
    iframe.style.height = "1px";
    iframe.style.top = "-10px";
    iframe.style.left = "-10px";
    iframe.style.opacity = "0.01";
    iframe.style.pointerEvents = "none";

    // Cargamos el video con los parámetros necesarios para autoplay tras interacción
    // Vicente Fernández - Volver Volver
    iframe.src = "https://www.youtube.com/embed/u0q3Vz8FkqE?autoplay=1&mute=0&loop=1&playlist=u0q3Vz8FkqE&enablejsapi=1";
    
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
