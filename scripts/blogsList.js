//get page number from url
const params = new URLSearchParams(document.location.search);
let currentPage = params.get('page');

async function callURL(page) {
  // function to call blogs API
  const response = await fetch(
    `https://nextjs-boilerplate-five-psi-45.vercel.app/api/blogs?page=${page}&per_page=4`
  );
  
  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();
  const loading = document.getElementById('loading');
  loading.style.display = 'none';
  return data;
}

let totalPages;
// pagination page number
let numberOfPage1;
let numberOfPage2;
let numberOfPage3;
let numberOfPage4;
let numberOfPage5;
let numberOfPage6;
let numberOfPage7;

const paginationContainer = document.getElementById('pagination');

function setNumberOfPages(currentPage) {
  if (currentPage < 4) {
    switch (parseInt(currentPage)) {
      case 1:
        numberOfPage1 = currentPage;
        numberOfPage2 = parseInt(currentPage) + 1;
        numberOfPage3 = parseInt(currentPage) + 2;
        numberOfPage4 = parseInt(currentPage) + 3;
        break;
      case 2:
        numberOfPage1 = parseInt(currentPage) - 1;
        numberOfPage2 = currentPage;
        numberOfPage3 = parseInt(currentPage) + 1;
        numberOfPage4 = parseInt(currentPage) + 2;
        break;
      case 3:
        numberOfPage1 = parseInt(currentPage) - 2;
        numberOfPage2 = parseInt(currentPage) - 1;
        numberOfPage3 = currentPage;
        numberOfPage4 = parseInt(currentPage) + 1;
        break;
      default:
        break;
    }
  } else {
    if (currentPage < totalPages - 2) {
      numberOfPage1 = parseInt(currentPage) - 3;
      numberOfPage2 = parseInt(currentPage) - 2;
      numberOfPage3 = parseInt(currentPage) - 1;
      numberOfPage4 = currentPage;
      numberOfPage5 = parseInt(currentPage) + 1;
      numberOfPage6 = parseInt(currentPage) + 2;
      numberOfPage7 = parseInt(currentPage) + 3;
    } else {
      switch (parseInt(currentPage)) {
        case totalPages - 2:
          numberOfPage1 = parseInt(currentPage) - 4;
          numberOfPage2 = parseInt(currentPage) - 3;
          numberOfPage3 = parseInt(currentPage) - 2;
          numberOfPage4 = parseInt(currentPage) - 1;
          numberOfPage5 = currentPage;
          numberOfPage6 = parseInt(currentPage) + 1;
          numberOfPage7 = parseInt(currentPage) + 2;
          break;
        case totalPages - 1:
          numberOfPage1 = parseInt(currentPage) - 5;
          numberOfPage2 = parseInt(currentPage) - 4;
          numberOfPage3 = parseInt(currentPage) - 3;
          numberOfPage4 = parseInt(currentPage) - 2;
          numberOfPage5 = parseInt(currentPage) - 1;
          numberOfPage6 = currentPage;
          numberOfPage7 = parseInt(currentPage) + 1;
          break;
        case totalPages:
          numberOfPage1 = parseInt(currentPage) - 6;
          numberOfPage2 = parseInt(currentPage) - 5;
          numberOfPage3 = parseInt(currentPage) - 4;
          numberOfPage4 = parseInt(currentPage) - 3;
          numberOfPage5 = parseInt(currentPage) - 2;
          numberOfPage6 = parseInt(currentPage) - 1;
          numberOfPage7 = currentPage;
          break;
      }
    }
  }
};



function creatingPaginationButton(id,numberOfPage){
  let paginationButton = document.createElement('a');
  paginationButton.setAttribute('id', id);
  paginationButton.classList.add('paginationItem');
  paginationButton.innerHTML = numberOfPage;
  paginationButton.href = `./index.html?page=${numberOfPage}`;
  paginationContainer.appendChild(paginationButton);

}

function creattingPagination(totalPages) {
  const previousButton = document.createElement('a');
  previousButton.setAttribute('id', 'previousButton');
  previousButton.classList.add('paginationItem');
  previousButton.innerHTML = 'prev';
  previousButton.href = `./index.html?page=${currentPage - 1}`;
  paginationContainer.appendChild(previousButton);

  if (currentPage == 1) {
    previousButton.style.display = 'none';
  }
  
  creatingPaginationButton('firstPageButton',numberOfPage1);
 
  if (totalPages > 4) {
    creatingPaginationButton('secondPageButton',numberOfPage2);

  }
  if (totalPages > 8) {
    creatingPaginationButton('thirdPageButton',numberOfPage3);

  }
  if (totalPages > 12) {
    creatingPaginationButton('fourthPageButton',numberOfPage4);

  }
  if (currentPage > 3) {
    if (totalPages > 16) {
      creatingPaginationButton('fifthPageButton',numberOfPage5);

    }
    if (totalPages > 20) {
      creatingPaginationButton('sixthPageButton',numberOfPage6);

    }
    if (totalPages > 24) {
      creatingPaginationButton('seventhPageButton',numberOfPage7);
    }
  }

  if (currentPage < totalPages - 3) {
    let paginationButtonEtc = document.createElement('a');
    paginationButtonEtc.setAttribute('id', 'etc');
    paginationButtonEtc.classList.add('paginationItem');
    paginationButtonEtc.innerHTML = '...';
    paginationContainer.appendChild(paginationButtonEtc);

    let paginationButtonLast = document.createElement('a');
    paginationButtonLast.setAttribute('id', 'lastPageButton');
    paginationButtonLast.classList.add('paginationItem');
    paginationButtonLast.innerHTML = totalPages;
    paginationButtonLast.href = `./index.html?page=${totalPages}`;
    paginationContainer.appendChild(paginationButtonLast);
  }

  if (currentPage < totalPages) {
    const nextButton = document.createElement('a');
    nextButton.setAttribute('id', 'nextButton');
    nextButton.classList.add('paginationItem');
    nextButton.innerHTML = 'next';
    nextButton.href = `./index.html?page=${parseInt(currentPage) + 1}`;
    paginationContainer.appendChild(nextButton);
  }
}

function setCards(data) {

  const container = document.getElementById('DynamicBlogsContainer');
  let counter = 0;
  while (counter<data.blogs.length) {
    const card = document.createElement('figure');
    const cardLink = document.createElement('a');
    const cardCaption = document.createElement('figcaption');
    const cardTitle = document.createElement('h3');
    const cardSubTitle = document.createElement('p');
    const cardDate = document.createElement('span');

    card.classList.add('dynamicCard');
    cardLink.classList.add('link');
    cardCaption.classList.add('cardCaption');
    cardTitle.classList.add('cardTitle');
    cardSubTitle.classList.add('cardSubtitle');
    cardDate.classList.add('cardDate');

    cardLink.href = `./blog.html?id=${data.blogs[counter].id}`;
    card.style.backgroundImage = `url(${data.blogs[counter].featured_image})`;
    cardTitle.innerHTML = data.blogs[counter].category;
    cardSubTitle.innerHTML = data.blogs[counter].subtitle;
    cardDate.innerHTML = data.blogs[counter].created_at;

    cardCaption.appendChild(cardTitle);
    cardCaption.appendChild(cardSubTitle);
    cardCaption.appendChild(cardDate);
    cardLink.appendChild(cardCaption);
    card.appendChild(cardLink);
    container.appendChild(card);

    counter++;
    
  }

}

function currentPageColor(currentPage) {
  const firstPageButton = document.getElementById('firstPageButton');
  firstPageButton.style.color = '#222222';
  const secondPageButton = document.getElementById('secondPageButton');
  secondPageButton.style.color = '#222222';
  const thirdPageButton = document.getElementById('thirdPageButton');
  thirdPageButton.style.color = '#222222';
  const fourthPageButton = document.getElementById('fourthPageButton');
  fourthPageButton.style.color = '#222222';

  if (currentPage < 4) {
    switch (parseInt(currentPage)) {
      case 1:
        firstPageButton.style.color = 'red';
        break;
      case 2:
        secondPageButton.style.color = 'red';
        break;
      case 3:
        thirdPageButton.style.color = 'red';
        break;
      default:
        break;
    }
  }
  if (currentPage > 3 && currentPage < totalPages - 2) {
    const fifthPageButton = document.getElementById('fifthPageButton');
    fifthPageButton.style.color = '#222222';
    const sixthPageButton = document.getElementById('sixthPageButton');
    sixthPageButton.style.color = '#222222';
    const seventhPageButton = document.getElementById('seventhPageButton');
    seventhPageButton.style.color = '#222222';

    fourthPageButton.style.color = 'red';
  }
  if (currentPage > totalPages - 3) {
    const fifthPageButton = document.getElementById('fifthPageButton');
    const sixthPageButton = document.getElementById('sixthPageButton');
    const seventhPageButton = document.getElementById('seventhPageButton');

    switch (parseInt(currentPage)) {

      case parseInt(totalPages)-2:
        fifthPageButton.style.color = 'red';
        break;
      case parseInt(totalPages)-1:
        sixthPageButton.style.color = 'red';
        break;
      case totalPages:
        seventhPageButton.style.color = 'red';
        break;
      default:
        break;
    }
  }
};


callURL(currentPage)
  .then((data) => {
    totalPages = data.total / 4;
    setNumberOfPages(currentPage);
    creattingPagination(totalPages);
    setCards(data);
    currentPageColor(currentPage);
  })
  .catch((error)=>{
    const loading = document.getElementById('loading');
    loading.innerHTML = error.message + ' There is some issues to loading...';
    loading.style.color = 'red';
    loading.style.fontSize = '50px';
    loading.style.animationName = 'none';
  });
 
  // animation to show static blogs
  const blog = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add('show');
              }, index * 100); 
          }
      });
  } );
  
  blog.forEach(box => observer.observe(box));