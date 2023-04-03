const userCardTemplate = document.querySelector('[data-user-card]');
const userCardContainer = document.querySelector('[data-user-container]');
const searchInput = document.querySelector('[data-search]');
// const icon = document.querySelector('.icon');
// const searchWrapper = document.querySelector('.search-wrapper');


// icon.addEventListener('click', () => {
//   searchWrapper.classList.toggle('super');
// });


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

// let blocks = [];

// function filtering(e) {
//   const value = e.target.value.toLowerCase().trim();
//   const input = document.querySelector('.input');
//   let interval;
//   let counter = 0;

//   const noFound = document.querySelector('.out');

//   input.addEventListener('keyup', () => {
//     clearTimeout(interval);

//     interval = setTimeout(() => {
//       if (value != '') {
//         blocks.forEach((block) => {
//           if (
//             block.header.toLowerCase().includes(value) ||
//             block.description.toLowerCase().includes(value)
//           ) {
//             block.element.classList.remove('h');
//           } else {
//             block.element.classList.add('h');
//             counter++;
//           }
//         });
//         if (counter == 6) {
//           noFound.classList.remove('h');
//           noFound.classList.add('dd');
//           noFound.innerHTML = 'No result!';
//         } else {
//           noFound.classList.add('h');
//         }
//       } else {
//         blocks.forEach((block) => {
//           if (counter >= 0) {
//             noFound.classList.add('h');
//           }

//           block.element.classList.remove('h');
//         });
//       }
//     }, 300);
//   });
// }

// searchInput.addEventListener('input', filtering);

projectCard.map((block) => {
  const card = userCardTemplate.content.cloneNode(true).children[0];
  const articleHeader = card.querySelector('[data-header]');
  const articleText = card.querySelector('[data-text]');
  const articleImage = card.querySelector('[data-image]');
  articleHeader.textContent = block.header;
  articleText.textContent = block.description;
  articleImage.src = block.img;
  userCardContainer.append(card);
  return {
    image: block.img,
    header: block.header,
    description: block.description,
    element: card,
  };
});
