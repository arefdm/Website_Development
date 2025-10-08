// get token from local storage
const params = new URLSearchParams(document.location.search);
const id = params.get('id');
const token = localStorage.getItem('token');

async function callURL() {
     // function to call product with id API
    const response = await fetch(`https://nextjs-boilerplate-five-psi-45.vercel.app/api/products/${id}`,
     {
        headers :{
             'Authorization' : `${token}`,
        }
});
    if (!response.ok) {
        const errorData = await response.json(); 
        throw new Error(JSON.stringify(errorData));
       }
        
    const data = await response.json();
    const loading = document.getElementById('loading');
    loading.style.display = 'none';
    console.log(data);
    return data;
    
};



callURL(id)
.then((data) => {
    setProduct(data);
})
.catch((error)=>{
    const loading = document.getElementById('loading');
    const errorContent = JSON.parse(error.message);
    loading.innerHTML = errorContent.error +' please sign in';
    loading.style.color = 'red';
    loading.style.animationIterationCount = '1';
    loading.style.fontSize = '50px';
});

function setProduct(data){
    const contentContainer = document.getElementById('contentContainer');
    const header = document.createElement('header');
    const headLink = document.createElement('a');
    const headTitle = document.createElement('h1');
    const productID = document.createElement('p');
    const productPrice = document.createElement('p');
    const headImg = document.createElement('img');
    const textContainer = document.createElement('div');
    const firstPragraph = document.createElement('p');
    const blockquote = document.createElement('blockquote');
    const blockquotParagraph = document.createElement('p');
    const productCategoryCA = document.createElement('p');
    const productCategoryUA = document.createElement('p');
    const reference = document.createElement('span');
    const createdAt = document.createElement('time');
    const referenceTime = document.createElement('Time');
    const spacer = document.createElement('span');
    const by = document.createElement('span');
    const manufacturer = document.createElement('span');
    
    header.setAttribute('id','header');
    headLink.setAttribute('id','headLink');
    headTitle.setAttribute('id','headTitle');
    productID.setAttribute('id','productID');
    productPrice.setAttribute('id','productPrice');
    headImg.setAttribute('id','headImg');
    textContainer.classList.add('textContainer');
    firstPragraph.setAttribute('id','firstParagraph');
    blockquote.setAttribute('id','blockquote');
    blockquotParagraph.setAttribute('id','blockquoteParagraph');
    productCategoryCA.setAttribute('id','productCategoryCA');
    productCategoryUA.setAttribute('id','productCategoryUA');
    reference.setAttribute('id','reference');
    createdAt.setAttribute('id','createdAt');
    referenceTime.setAttribute('id','referenceTime');
    spacer
    by
    manufacturer.setAttribute('id','manufacturer');

    

    headLink.innerHTML = data.product.name; 
    headTitle.innerHTML = data.product.product_category.name;
    productID.innerHTML = 'product ID :'+ data.product.id;
    productPrice.innerHTML ='price : $' + data.product.price; 
    headImg.src = data.product.image;
    firstPragraph.innerHTML = data.product.description;
    blockquotParagraph.innerHTML = 'Product category ID : ' + data.product.product_category.id;
    productCategoryCA.innerHTML ='Product category created at '+ data.product.product_category.created_at;
    productCategoryUA.innerHTML = 'Product category updated at '+ data.product.product_category.updated_at
    createdAt.innerHTML = data.product.created_at;
    referenceTime.innerHTML = data.product.updated_at;
    spacer.innerHTML = '/';
    by.innerHTML = 'by';
    manufacturer.innerHTML = data.product.manufacturer;

    blockquote.appendChild(blockquotParagraph);
    header.appendChild(headLink);
    header.appendChild(headTitle);
    header.appendChild(productID);
    header.appendChild(productPrice);
    textContainer.appendChild(firstPragraph);
    textContainer.appendChild(blockquote);
    textContainer.appendChild(productCategoryCA);
    textContainer.appendChild(productCategoryUA);
    reference.appendChild(createdAt);
    reference.appendChild(referenceTime);
    reference.appendChild(spacer);
    reference.appendChild(by);
    reference.appendChild(manufacturer);
    contentContainer.appendChild(header);
    contentContainer.appendChild(headImg);
    contentContainer.appendChild(textContainer);
    contentContainer.appendChild(reference);

};