var animation = lottie.loadAnimation({
  container: document.getElementById('splash-animation'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'splash.json' // Ruta correcta al archivo JSON
});

animation.addEventListener('complete', function() {
  document.getElementById('splash-animation').classList.add('hidden');
  setTimeout(function() {
    document.getElementById('splash-animation').style.display = 'none';
    document.getElementById('splash-background').style.display = 'none';
  }, 500);
});
