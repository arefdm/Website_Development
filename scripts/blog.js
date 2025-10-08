//get blog id from URL
const params = new URLSearchParams(document.location.search);
const id = params.get('id');

async function callURL(id) {
    // function to call blog API with ID
    const response = await fetch(`https://nextjs-boilerplate-five-psi-45.vercel.app/api/blogs/${id}`);
    if (!response.ok) {
        throw new Error(response.status);
       }
        
        const data = await response.json();
        const loading = document.getElementById('loading');
        loading.style.display = 'none';
        return data;   
};

function setBlog(data){
    const headLink = document.getElementById('headLink');
    const headTitle = document.getElementById('headTitle');
    const headImg = document.getElementById('headImg');
    const firstPragraph = document.getElementById('firstParagraph');
    const blockquotParagraph = document.getElementById('blockquoteParagraph');
    const secondParagraph = document.getElementById('secondParagraph');
    const referenceTime = document.getElementById('referenceTime');
    const author = document.getElementById('author');

    const parser = new DOMParser();
    const doc = parser.parseFromString(data.blog.main_content, 'text/html');
    // Select all <p> elements
    const pTags = doc.querySelectorAll('p');
    let firstParagraphContent = '';
    // finding the text content of each <p> tag
    pTags.forEach(p => {
    firstParagraphContent += p.textContent;
});

    headLink.innerHTML = data.blog.category;
    headTitle.innerHTML = data.blog.title;
    headImg.src = data.blog.featured_image;
    firstPragraph.innerHTML = firstParagraphContent;
    blockquotParagraph.innerHTML = data.blog.subtitle;
    secondParagraph.innerHTML = data.blog.summary;
    referenceTime.innerHTML = data.blog.created_at;
    author.innerHTML = data.blog.user.last_name;

};


callURL(id)
.then((data) => {
    setBlog(data);
})
.catch((error)=>{
    const loading = document.getElementById('loading');
    loading.innerHTML = error.message + ' There is some issues to loading...';
    loading.style.color = 'red';
    loading.style.fontSize = '50px';
    loading.style.animationName = 'none';
  });

