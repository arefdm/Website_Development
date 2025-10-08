// changing summey content
const sentences = ['beautiful logo.','successful brand.','thriving business.'];
const outputElement = document.getElementById('summerySpan');
let sentenceIndex = 0; 
let charIndex = 0; 
let typing = true;

function type() {
    if (typing) {
        
        outputElement.textContent += sentences[sentenceIndex][charIndex];
        charIndex++;

        if (charIndex === sentences[sentenceIndex].length) {
            typing = false;
            outputElement.style.backgroundColor = 'black';
            outputElement.style.color = 'white';
            setTimeout(type, 1500); 
        } else {
            setTimeout(type, 150); 
        }
    } else {
        outputElement.style.backgroundColor = 'white';
        outputElement.style.color = 'black';
        outputElement.textContent = '';
        charIndex = 0 ;

        
        if (charIndex === 0) {
            sentenceIndex = (sentenceIndex + 1) % sentences.length; 
            typing = true;
            setTimeout(type, 1000); 
        } else {
            setTimeout(type, 100); 
        }
    }
}

type(); 

//animation to show images when are appeared
const img = document.querySelectorAll('.pageImg');

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 100); 
        }
    });
} );

img.forEach(box => observer.observe(box));