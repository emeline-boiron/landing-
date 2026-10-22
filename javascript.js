let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function changeImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

// Change d'image toutes les 3 secondes en boucle infinie
setInterval(changeImage, 3000);
