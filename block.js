const userCardTemplate = document.querySelector('[data-user-card]');
const userCardContainer = document.querySelector('[data-user-container]');
const searchInput = document.querySelector('[data-search]');
const icon = document.querySelector('.icon');
const searchWrapper = document.querySelector('.search-wrapper');

icon.addEventListener('click', () => {
  searchWrapper.classList.toggle('super');
});

const projectCard = [
  {
    img: 'images/spring-boot.svg',
    header: 'Spring Boot',
    description:
      'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible',
  },
  {
    img: 'images/spring-framework.svg',
    header: 'Spring Framework',
    description:
      'Provides core support for dependency injection, transactionmanagement, web apps, data access, messaging, and more',
  },
  {
    img: 'images/spring-data.svg',
    header: 'Spring Data',
    description:
      ' Provides a consistent approach to data access – relational,  non-relational, map-reduce, and beyond.',
  },
  {
    img: 'images/spring-cloud.svg',
    header: 'Spring Cloud',
    description:
      ' Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.',
  },
  {
    img: 'images/spring-data-flow.svg',
    header: 'Spring Cloud Dara Flow',
    description:
      ' Provides an orchestration service for composable data microservice applications on modern runtimes.',
  },
  {
    img: 'images/spring-security.svg',
    header: 'Spring Security',
    description:
      'Protects your application with comprehensive and extensible authentication and authorization support.',
  },
];

function generateProjectCard(cardsData) {
  let blocks = [];

  cardsData.forEach((card, index) => {
    blocks.push(`
      <article class="article-item">
          <img data-image class="article-img" src="${card.img}" />
          <div class="article-wrapper">
            <h3 class="article-header" data-header>${card.header}</h3>
            <p class="article-text" data-text>${card.description}</p>
          </div>
        </article>
      `);
  });

  return blocks;
}

const input = document.querySelector('.input');

let interval;

input.addEventListener('keyup', (e) => {
  clearInterval(interval);

  interval = setTimeout(() => {
    const inputValue = e.target.value;
    filtering(inputValue);

    if (document.querySelector('.wrapper-section').children.length === 0) {
      document.querySelector('.wrapper-section').innerHTML = `
        <div class="dd">No result!</div>
      `;
    }
  }, 500);
});

function filtering(searchValue) {
  const rgx = new RegExp(searchValue, 'i');

  let filteredProjectCard = projectCard.filter((card) => {
    if (rgx.test(card.title) || rgx.test(card.header)) {
      return true;
    } else {
      return false;
    }
  });

  document.querySelector('.wrapper-section').innerHTML =
    generateProjectCard(filteredProjectCard).join('');
}

const cardsArr = generateProjectCard(projectCard);
document.querySelector('.wrapper-section').innerHTML = cardsArr.join('');
