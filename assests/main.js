document.addEventListener("DOMContentLoaded", function () {
    const numbers = document.querySelectorAll(".adv-number");

    numbers.forEach((el, index) => {
      const num = index + 1;
      el.textContent = num < 10 ? "0" + num + "." : num + ".";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const numbers = document.querySelectorAll(".wf-number");

    numbers.forEach((el, index) => {
      const num = index + 1;
      el.textContent = num < 10 ? "0" + num + "." : num + ".";
    });
  });
  const blogSwiper = new Swiper('.blog-slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.blog-next',
    prevEl: '.blog-prev',
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 4 }
  }
});

/* ===== SMART PAGINATION ===== */

const pagination = document.querySelector('.blog-pagination');

function createPagination() {

  pagination.innerHTML = '';

  const slidesPerView = blogSwiper.params.slidesPerView;
  const totalSlides = blogSwiper.slides.length;

  const totalPages = totalSlides - slidesPerView + 1;

  for (let i = 0; i < totalPages; i++) {

    const span = document.createElement('span');
    span.textContent = i + 1 < 10 ? '0' + (i + 1) : (i + 1);
    span.dataset.index = i;

    span.addEventListener('click', function () {
      blogSwiper.slideTo(i);
    });

    pagination.appendChild(span);
  }

  updateActive(0);
}

function updateActive(index) {
  document.querySelectorAll('.blog-pagination span')
    .forEach(el => el.classList.remove('active'));

  const active = document.querySelector(
    `.blog-pagination span[data-index="${index}"]`
  );

  if (active) active.classList.add('active');
}

blogSwiper.on('slideChange', function () {
  updateActive(blogSwiper.activeIndex);
});

createPagination();

document.getElementById('year').textContent = new Date().getFullYear();


window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});