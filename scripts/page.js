// animation to show content when are appeared
const figures = document.querySelectorAll('.figure');
const contents = document.querySelectorAll('.contentView');

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 100);
        }
    });
});

figures.forEach(box => observer.observe(box));
contents.forEach(box => observer.observe(box));

// changing number to 324
const target1 = document.getElementById('firstNumber');

const counter1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = setInterval(()=>{
                
                entry.target.innerHTML = parseInt(entry.target.innerHTML)+1;
                if (entry.target.innerHTML == 324) {
                    clearInterval(counter);
                }
            },5);
            counter1.unobserve(entry.target); 
        }
    });
});

counter1.observe(target1);

// changing number to 23
const target2 = document.getElementById('secondNumber');

const counter2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = setInterval(()=>{
                
                entry.target.innerHTML = parseInt(entry.target.innerHTML)+1;
                if (entry.target.innerHTML == 23) {
                    clearInterval(counter);
                }
            },70);
            
            counter2.unobserve(entry.target); 
        }
    });
}); 

counter2.observe(target2);