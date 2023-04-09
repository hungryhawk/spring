let navMenu = [
  {
    title: 'Why spring',
    menuItem: [
      'Overview',
      'Microservices',
      'Reactive',
      'Event Driven',
      'Cloud',
      'Web applications',
      'Serverless',
      'Batch',
    ],
    id: 1,
  },
  {
    title: 'Learn',
    menuItem: ['Overview', 'Quickstart', 'Guides', 'Blog'],
    id: 2,
  },
  {
    title: 'Projects',
    menuItem: [
      'Overview',
      'Spring Boot',
      'Spring Framework',
      'Spring Cloud',
      'Spring Cloud Data Flow',
      'Spring Data',
      'Spring Batch',
      'Spring Security',
      'View All Products',
      'Development Tools',
      'Spring Tools 4',
      'Spring Initializr',
    ],
    id: 3,
  },
  { title: 'Academy', menuItem: ['Courses', 'Get Certified'], id: 4 },
  { title: 'Support', menuItem: ['Overview', 'Security Advisories'], id: 5 },
  { title: 'Community', menuItem: ['Overview', 'Events', 'Team'], id: 6 },
];

const menuSlide = () => {
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('open');
    burger.classList.toggle('active');
    burger.classList.add('white-cross');
    if (burger.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
      document.querySelector('.search-wrapper').classList.add('hide');
    } else {
      document.body.style.overflow = 'auto';
      document.querySelector('.search-wrapper').classList.remove('hide');
    }
  });
};

menuSlide();

function createNavMenu() {
  const userDataTemplate = document.querySelector('[data-header-template]');
  const headerContainer = document.querySelector('[data-container]');

  navMenu.forEach((item, index) => {
    const grid = userDataTemplate.content.cloneNode(true).children[0];
    const header = grid.querySelector('[data-header]');
    const dropDown = grid.querySelectorAll('[data-drop]');
    const icon = grid.querySelector('[data-icon]');

    header.textContent = navMenu[index].title;
    header.setAttribute('data-id', navMenu[index].id);

    dropDown.forEach((block, idx) => {
      navMenu[index].menuItem.map((el) => {
        dropDown[idx].innerHTML += `
          <li class="dropdown-item">
            <a class="dropdown-link">${el}</a>
          </li>
        `;
      });
    });
    header.append(icon);
    headerContainer.append(grid);
  });
}

function createBurgerIsBlock() {
  let checkItems = false;

  document.querySelector('.burger').addEventListener('click', () => {
    if (!checkItems) {
      const allMenuItem = document.querySelectorAll('.menu-item');

      allMenuItem.forEach((item, index) => {
        const arrow = document.createElement('span');
        arrow.classList.add('arrow');
        item.prepend(arrow);
        const isBlock = document.createElement('div');

        isBlock.classList.add('is-block');
        isBlock.classList.add('hide');
        isBlock.setAttribute('data-b', navMenu[index].id);

        item.after(isBlock);

        let isExist = false;
        item.addEventListener('click', (e) => {
          if (e.target.dataset.id === isBlock.getAttribute('data-b')) {
            isBlock.classList.toggle('hide');
            arrow.classList.toggle('arrow-reverse');

            if (!isExist) {
              navMenu[index].menuItem.map((el) => {
                isBlock.innerHTML += `<a class="block-link">${el}</a>`;
              });
            }
          }
          const cross = document.querySelector('.white-cross');

          cross.addEventListener('click', () => {
            isBlock.classList.add('hide');
            arrow.classList.remove('arrow-reverse');
          });
          isExist = true;
        });
        if (navMenu[index].menuItem.length === 0) {
          arrow.remove();
          isBlock.remove();
        }
      });
    }
    checkItems = true;
  });
}
createBurgerIsBlock();
createNavMenu();
