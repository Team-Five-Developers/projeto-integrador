// script.js

document.addEventListener('DOMContentLoaded', function () {
    const paginasSlide = document.querySelector('.paginas-slide');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
  
    function mostrarSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('on');
        if (i === index) {
          slide.classList.add('on');
        }
      });
    }
  
    document.getElementById('botao-voltar').addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      mostrarSlide(currentIndex);
    });
  
    document.getElementById('botao-avancar').addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % slides.length;
      mostrarSlide(currentIndex);
    });
  });
  