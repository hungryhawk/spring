let data = [
  {
    title: 'Why spring',
    items: [
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
    items: ['Overview', 'Quickstart', 'Guides', 'Blog'],
    id: 2,
  },
  {
    title: 'Projects',
    items: [
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
  { title: 'Academy', items: ['Courses', 'Get Certified'], id: 4 },
  { title: 'Support', items: ['Overview', 'Security Advisories'], id: 5 },
  { title: 'Community', items: ['Overview', 'Events', 'Team'], id: 6 },
];

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

function createNavMenu() {
  const userDataTemplate = document.querySelector('[data-header-template]');
  const headerContainer = document.querySelector('[data-container]');

  for (let i = 0; i < data.length; i++) {
    const grid = userDataTemplate.content.cloneNode(true).children[0];
    const header = grid.querySelector('[data-header]');
    const dropDown = grid.querySelectorAll('[data-drop]');
    const icon = grid.querySelector('[data-icon]');
    header.textContent = data[i].title;
    header.setAttribute('data-id', data[i].id);
    for (let k = 0; k < dropDown.length; k++) {
      data[i].items.map((el) => {
        dropDown[k].innerHTML += `<li 
        class="dropdown-item">
            <a class="dropdown-link">${el}</a>
          </li>`;
      });
    }
    header.append(icon);
    headerContainer.append(grid);
  }
}

function createBurgerIsBlock() {
  let flag = false;
  document.querySelector('.burger').addEventListener('click', () => {
    if (!flag) {
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

      const allMenuItem = document.querySelectorAll('.menu-item');

      for (let i = 0; i < allMenuItem.length; i++) {
        const isBlock = document.createElement('div');

        isBlock.classList.add('is-block');
        isBlock.classList.add('hide');
        isBlock.setAttribute('data-b', data[i].id);

        allMenuItem[i].after(isBlock);

        let isReal = false;
        allMenuItem.forEach((item) => {
          item.addEventListener('click', (e) => {
            let currTarget = e.target.dataset.id;

            if (currTarget == isBlock.getAttribute('data-b')) {
              isBlock.classList.toggle('hide');
              if (!isReal) {
                data[i].items.map((el) => {
                  isBlock.innerHTML += `<a class="block-link">${el}</a>`;
                });
              }
              isReal = true;
            }
          });
        });
      }
      flag = true;
    }
  });
}

createNavMenu();

createBurgerIsBlock();
