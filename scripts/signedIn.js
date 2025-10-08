// modify all page when client is signed in
document.addEventListener('DOMContentLoaded',()=>{
    if (localStorage.token) {
        const signInheadButton = document.getElementById('signIn');
        signInheadButton.innerHTML = 'Signed In';
        signInheadButton.classList.add('signedIn');
      
        const hideSignInButton = document.getElementById('hideSignIn');
        hideSignInButton.style.color = '#05f318';  
    }
})

