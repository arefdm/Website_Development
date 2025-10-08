//pagination for biography
let firstBiographyCardNum = 0;
const bigraphyItems = document.getElementsByClassName('biographyItem');
//pagination button for larg screen size
const nextButton3 = document.getElementById('nextButton3');
nextButton3.style.cursor = 'pointer';
const previousButton3 = document.getElementById('previousButton3');
previousButton3.style.cursor = 'pointer';
//pagination button for medium screen size
const nextButton2 = document.getElementById('nextButton2');
nextButton2.style.cursor = 'pointer';
const previousButton2 = document.getElementById('previousButton2');
previousButton2.style.cursor = 'pointer';
//pagination button for small screen size
const nextButton1 = document.getElementById('nextButton1');
nextButton1.style.cursor = 'pointer';
const previousButton1 = document.getElementById('previousButton1');
previousButton1.style.cursor = 'pointer';

previousButton3.style.display = 'none';
previousButton2.style.display = 'none';
previousButton1.style.display = 'none';


nextButton3.addEventListener('click', () => {
  if (firstBiographyCardNum < 4) {
    if (firstBiographyCardNum == 3) {
      nextButton3.style.display = 'none';
    }
    bigraphyItems[firstBiographyCardNum].style.display = 'none';
    firstBiographyCardNum++;
    if (firstBiographyCardNum > 0) {
      previousButton3.style.display = 'inLine';
      previousButton2.style.display = 'inLine';
      previousButton1.style.display = 'inLine';
    }
  }
});

previousButton3.addEventListener('click', () => {
  if (firstBiographyCardNum > 0) {
    if (firstBiographyCardNum == 1) {
      previousButton3.style.display = 'none';
      previousButton2.style.display = 'none';
      previousButton1.style.display = 'none';
    }
    bigraphyItems[firstBiographyCardNum - 1].style.display = 'list-item';
    firstBiographyCardNum--;
    if (firstBiographyCardNum < 4) {
      nextButton3.style.display = 'inLine';
    }
  }
});

nextButton2.addEventListener('click', () => {
  if (firstBiographyCardNum < 5) {
    if (firstBiographyCardNum == 3) {
      nextButton3.style.display = 'none';
    }
    if (firstBiographyCardNum == 4) {
      nextButton2.style.display = 'none';
    }
    bigraphyItems[firstBiographyCardNum].style.display = 'none';
    firstBiographyCardNum++;
    if (firstBiographyCardNum > 0) {
      previousButton3.style.display = 'inLine';
      previousButton2.style.display = 'inLine';
      previousButton1.style.display = 'inLine';
    }
  }
});

previousButton2.addEventListener('click', () => {
  if (firstBiographyCardNum > 0) {
    if (firstBiographyCardNum == 1) {
      previousButton3.style.display = 'none';
      previousButton2.style.display = 'none';
      previousButton1.style.display = 'none';
    }
    bigraphyItems[firstBiographyCardNum - 1].style.display = 'list-item';
    firstBiographyCardNum--;
    if (firstBiographyCardNum < 5) {
      nextButton2.style.display = 'inLine';
    }
  }
});

nextButton1.addEventListener('click', () => {
  if (firstBiographyCardNum < 6) {
    if (firstBiographyCardNum == 3) {
      nextButton3.style.display = 'none';
    }
    if (firstBiographyCardNum == 4) {
      nextButton2.style.display = 'none';
    }

    if (firstBiographyCardNum == 5) {
      nextButton1.style.display = 'none';
    }

    bigraphyItems[firstBiographyCardNum].style.display = 'none';
    firstBiographyCardNum++;
    if (firstBiographyCardNum > 0) {
      previousButton3.style.display = 'inLine';
      previousButton2.style.display = 'inLine';
      previousButton1.style.display = 'inLine';
    }
  }
});

previousButton1.addEventListener('click', () => {
  if (firstBiographyCardNum > 0) {
    if (firstBiographyCardNum == 1) {
      previousButton3.style.display = 'none';
      previousButton2.style.display = 'none';
      previousButton1.style.display = 'none';
    }
    bigraphyItems[firstBiographyCardNum - 1].style.display = 'list-item';
    firstBiographyCardNum--;
    if (firstBiographyCardNum < 6) {
      nextButton1.style.display = 'inLine';
    }
  }
});

// animation for element to show when they are appeared
const biographies = document.querySelectorAll('.biographyItem');
const description = document.querySelectorAll('.description');
const skillBar1 = document.querySelectorAll('.bar1');
const skillBar2 = document.querySelectorAll('.bar2');
const skillBar3 = document.querySelectorAll('.bar3');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 100);
    }
  });
});

biographies.forEach((box) => observer.observe(box));
description.forEach((box) => observer.observe(box));
skillBar1.forEach((box) => observer.observe(box));
skillBar2.forEach((box) => observer.observe(box));
skillBar3.forEach((box) => observer.observe(box));

