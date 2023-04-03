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
  },
  { title: 'Learn', items: ['Overview', 'Quickstart', 'Guides', 'Blog'] },
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
  },
  { title: 'Academy', items: ['Courses', 'Get Certified'] },
  { title: 'Support', items: ['Overview', 'Security Advisories'] },
  { title: 'Community', items: ['Overview', 'Events', 'Team', 'Govno'] },
];

function createNavMenu() {
  const userDataTemplate = document.querySelector('[data-header-template]');
  const headerContainer = document.querySelector('[data-container]');

  for (let i = 0; i < data.length; i++) {
    const grid = userDataTemplate.content.cloneNode(true).children[0];
    const header = grid.querySelector('[data-header]');
    // const body = grid.querySelector('[data-body]');
    const dropDown = grid.querySelectorAll('[data-drop]');
    const icon = grid.querySelector('[data-icon]');
    header.textContent = data[i].title;
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

createNavMenu();
