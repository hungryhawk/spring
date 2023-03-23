const menuSlide = () => {
  const burger = document.querySelector('.burger');
  //   const nav = document.querySelector('.menu-item');

  burger.addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('open');
    // nav.classList.toggle('menu-active');
    burger.classList.toggle('toggle');
  });
};

menuSlide();
