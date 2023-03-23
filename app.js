const menuSlide = () => {
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('open');
    burger.classList.toggle('active');
    burger.classList.add('white-cross');
    if (burger.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    }
  });
};

const dropDown = () => {
  const menuItem = document.querySelectorAll('.menu-item');

  for (let item of menuItem) {
    item.addEventListener('click', (e) => {
      let currTarget = e.target.dataset.id;

      if (currTarget) {
        document
          .querySelector(`[data-b = "${currTarget}"]`)
          .classList.toggle('hide');
      }
    });
  }
};

dropDown();

menuSlide();
