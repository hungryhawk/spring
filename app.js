const menuSlide = () => {
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('open');
    burger.classList.toggle('active');
    burger.classList.add('white-cross');
    if (burger.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
      document.querySelector('.search-wrapper').classList.add('h');
    } else {
      document.body.style.overflow = 'auto';
      document.querySelector('.search-wrapper').classList.remove('h');
    }
  });
};

menuSlide();

function createBurgerIsBlock() {
  document.querySelector('.burger').addEventListener('click', () => {
    if (document.querySelector('.nav-menu').classList.contains('open')) {
      const allMenuLink = document.querySelectorAll('.menu-link');
      for (let i = 0; i < allMenuLink.length; i++) {
        const arrow = document.createElement('span');
        arrow.classList.add('arrow');
        allMenuLink[i].append(arrow);
      }
      allMenuLink.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.target.children[1].classList.toggle('arrow-reverse');
        });
      });
    }
  });
}

createBurgerIsBlock();

// const dropDown = () => {
//   const menuItem = document.querySelectorAll('.menu-item');

//   for (let item of menuItem) {
//     item.addEventListener('click', (e) => {
//       let currTarget = e.target.dataset.id;

//       if (currTarget) {
//         document
//           .querySelector(`[data-b = "${currTarget}"]`)
//           .classList.toggle('hide');

//         e.target.children[0].classList.toggle('arrow-reverse');
//       }
//     });
//   }
// };

// dropDown();