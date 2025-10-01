const container = document.querySelector('.new');
const slides = document.querySelectorAll('.new .six');
const indicatorsContainer = document.querySelector('.indicators');

let currentIndex = 0;

      // إنشاء الدوائر
      slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        indicatorsContainer.appendChild(dot);
      });

      const dots = document.querySelectorAll('.dot');

      function goToSlide(index) {
        const width = slides[0].offsetWidth + 12; // 12 = gap
        container.scrollTo({
          left: index * width,
          behavior: 'smooth'
        });

        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
      }

      // تحريك تلقائي كل ثانية
      setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
      }, 2000);

      // السماح بالنقر على الدوائر
      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          currentIndex = i;
          goToSlide(currentIndex);
        });
      });

      ScrollReveal().reveal('.bottom', {
        duration: 1000, delay: 500,  origin: 'bottom', distance: '50px', easing: 'ease-out', reset: true
      });