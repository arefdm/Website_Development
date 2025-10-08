//animation to show content that are appeared
const contact = document.querySelectorAll('.contact');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 100); 
    }
  });
});

contact.forEach((box) => observer.observe(box));
