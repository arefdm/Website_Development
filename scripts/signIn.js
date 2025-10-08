if (localStorage.token) {
  changesignInTosignedIn();
}

//checking register mode from url parameter
let params = new URLSearchParams(document.location.search);
let registerMode = params.get('registerMode');

const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const signedInForm = document.getElementById('signedInForm');

// keep registerMode on refresh
switch (registerMode) {
  case 'signIn':
    signInForm.style.display = 'flex';
    signUpForm.style.display = 'none';
    signedInForm.style.display = 'none';
    break;
  case 'signUp':
    signInForm.style.display = 'none';
    signUpForm.style.display = 'flex';
    signedInForm.style.display = 'none';
    break;
  case 'signedIn':
    const signedInEmail = document.getElementById('signedInEmail');
    signedInEmail.innerHTML = localStorage.email;
    const signedInTitle = document.getElementById('signedInTitle');
    signedInTitle.innerHTML = localStorage.message;
    // modify headers Item 
    document.addEventListener('DOMContentLoaded', () => {
      const signInheadButton = document.getElementById('signIn');
      const hideSignInButton = document.getElementById('hideSignIn');
      signInheadButton.style.color = '#222222';
      signInheadButton.style.background = '#05f318';
      hideSignInButton.style.color = '#05f318';
    });

    signInForm.style.display = 'none';
    signUpForm.style.display = 'none';
    signedInForm.style.display = 'block';

    break;

  default:
    break;
}

async function signInCall() {
  // function to call Sign in API
  const request = new Request(
    `https://nextjs-boilerplate-five-psi-45.vercel.app/api/sign-in`,
    {
      method: 'POST',
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
    }
  );
  const response = await fetch(request);
  if (!response.ok) {
    //getting response to show it to client
    const errorData = await response.json();
    throw new Error(JSON.stringify(errorData));
  }
  const result = await response.json();
  return result;
}

async function signUpCall() {
  // function to call Sign up API
  const request = new Request(
    `https://nextjs-boilerplate-five-psi-45.vercel.app/api/sign-up`,
    {
      method: 'POST',
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
        confirm_password: `${confirmPassword}`,
      }),
    }
  );
  const response = await fetch(request);
  if (!response.ok) {
    //getting response to show it to client
    const errorData = await response.json(); 
    throw new Error(JSON.stringify(errorData));
  }
  const result = await response.json();
  return result;
}

let email;
let password;
let confirmPassword;
let token;

const signInButton = document.getElementById('signInButton');
signInButton.addEventListener('click', () => {
  signIn();
});

const sinOutButton = document.getElementById('signOutButton');
sinOutButton.addEventListener('click', () => {
  localStorage.clear();
  changesignInTosignedIn();
});

const signUpButton = document.getElementById('signUpButton');
signUpButton.addEventListener('click', () => {
  signUp();
});

function signIn() {
  const signInEmail = document.getElementById('signInEmail');
  const signInPassword = document.getElementById('signInPassword');

  email = signInEmail.value;
  password = signInPassword.value;
  signInEmail.value = '';
  signInPassword.value = '';

  signInCall()
    .then((result) => {
      const signInStatusContainer = document.getElementById(
        'signInStatusContainer'
      );
      if (signInStatusContainer.firstChild) {
        signInStatusContainer.removeChild(signInStatusContainer.firstChild);
      }
      const signedInEmail = document.getElementById('signedInEmail');
      signedInEmail.innerHTML = result.email;
      localStorage.setItem('email', result.email);
      const signedInTitle = document.getElementById('signedInTitle');
      signedInTitle.innerHTML = result.message;
      localStorage.setItem('message', result.message);
      localStorage.setItem('token', result.token);
      changesignInTosignedIn();
      changeHeadicon();
    })
    .catch((error) => {
      const signInStatusContainer = document.getElementById(
        'signInStatusContainer'
      );
      if (signInStatusContainer.firstChild) {
        signInStatusContainer.removeChild(signInStatusContainer.firstChild);
      }
      const errorContent = JSON.parse(error.message);
      const signInStatus = document.createElement('p');
      signInStatus.innerHTML = errorContent.error;
      signInStatus.style.color = 'red';
      signInStatusContainer.appendChild(signInStatus);
    });
}

function signUp() {
  const signUpEmail = document.getElementById('signUpEmail');
  const signUpPassword = document.getElementById('signUpPassword');
  const signUpConfirmPassword = document.getElementById('signUpconfirmPass');

  email = signUpEmail.value;
  password = signUpPassword.value;
  confirmPassword = signUpConfirmPassword.value;
  signUpEmail.value = '';
  signUpPassword.value = '';
  signUpConfirmPassword.value = '';

  signUpCall()
    .then((result) => {
      const signUpStatusContainer = document.getElementById(
        'signUpStatusContainer'
      );
      if (signUpStatusContainer.firstChild) {
        signUpStatusContainer.removeChild(signUpStatusContainer.firstChild);
      }
      const signedInEmail = document.getElementById('signedInEmail');
      signedInEmail.innerHTML = result.email;
      localStorage.setItem('email', result.email);
      const signedInTitle = document.getElementById('signedInTitle');
      signedInTitle.innerHTML = result.message;
      localStorage.setItem('message', result.message);
      localStorage.setItem('token', result.token);
      changesignUpTosignedIn();
      changeHeadicon();
    })
    .catch((error) => {
      const signUpStatusContainer = document.getElementById(
        'signUpStatusContainer'
      );
      if (signUpStatusContainer.firstChild) {
        signUpStatusContainer.removeChild(signUpStatusContainer.firstChild);
      }
      const errorContent = JSON.parse(error.message);
      const signUpStatus = document.createElement('p');
      signUpStatus.innerHTML = errorContent.error;
      signUpStatus.style.color = 'red';
      signUpStatusContainer.appendChild(signUpStatus);
    });
}

function changeSignInToSignUp() {
  const signInForm = document.getElementById('signInForm');
  const signUpForm = document.getElementById('signUpForm');

  // change visibility between Sign In and Sign Up forms
  if (signInForm.style.display === 'none') {
    signInForm.style.display = 'flex';
    signUpForm.style.display = 'none';

    changeUrlParameter('signIn');
  } else {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'flex';

    changeUrlParameter('signUp');
  }
}

function changesignInTosignedIn() {
  const signInForm = document.getElementById('signInForm');
  const signedInForm = document.getElementById('signedInForm');

  // change visibility between Sign In and Signed in forms
  if (signInForm.style.display === 'none') {
    signInForm.style.display = 'flex';
    signedInForm.style.display = 'none';

    changeUrlParameter('signIn');
  } else {
    signInForm.style.display = 'none';
    signedInForm.style.display = 'block';

    changeUrlParameter('signedIn');
  }
}

function changesignUpTosignedIn() {
  const signUpForm = document.getElementById('signUpForm');
  const signedInForm = document.getElementById('signedInForm');

  // change visibility between Sign up and Signed in forms
  if (signUpForm.style.display === 'none') {
    signUpForm.style.display = 'flex';
    signedInForm.style.display = 'none';

    changeUrlParameter('signUp');
  } else {
    signUpForm.style.display = 'none';
    signedInForm.style.display = 'block';

    changeUrlParameter('signedIn');
  }
}

function changeUrlParameter(mode) {
  //changing registerMode parametr of url
  let url = new URL(window.location.href);
  let params = new URLSearchParams(url.search);
  params.set('registerMode', mode); // Set or update 'key' to 'newValue'
  url.search = params.toString(); // Update the URL with the modified parameters
  window.history.pushState({}, '', url); // Push the updated URL to the browser's address bar without reloading the page
}

function changeHeadicon() {
  const signInheadButton = document.getElementById('signIn');
  const hideSignInButton = document.getElementById('hideSignIn');
  signInheadButton.innerHTML = 'Signed In';
  signInheadButton.style.backgroundColor = '#05f318';
  hideSignInButton.style.color = '#05f318';
}
