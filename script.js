document.addEventListener('DOMContentLoaded', function() {
  var animation = lottie.loadAnimation({
    container: document.getElementById('splash-container'), // El contenedor donde se mostrará la animación
    renderer: 'svg', // Renderiza la animación como SVG
    loop: true, // Configura si debe repetirse
    autoplay: true, // Reproduce la animación automáticamente
    path: 'splash.json' // Ruta al archivo JSON exportado
  });
  
  // Opcional: Puedes esconder el splash después de un tiempo
  setTimeout(function() {
    document.getElementById('splash-container').style.display = 'none';
  }, 3000); // Cambia 3000 por el tiempo en milisegundos que quieras
});
