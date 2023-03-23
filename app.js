const menuSlide = () => {
  const burger = document.querySelector('.burger');
  //   const nav = document.querySelector('.menu-item');

  burger.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('open');
    // nav.classList.toggle('menu-active');
    burger.classList.toggle('active');
    burger.classList.add('white-cross');
  });
};

const showItem = () => {
  const itemMenu = document.querySelectorAll('.menu-item');
  const drop = document.querySelector('.dropdown');

  //   const hide = document.querySelectorAll('.hide')

  itemMenu.forEach((item) => {
    item.addEventListener('click', () => {
      console.log(item);
      drop.classList.toggle('is-open');
    });
  });
};

menuSlide();

showItem();

// showItem();
