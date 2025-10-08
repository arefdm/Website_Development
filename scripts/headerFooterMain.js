//making header and footer fo main pages
class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML=`
        <style>
.header{
    position: relative;
    max-width: 100%;
    height: 66px;
    background-color:#111111;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
}

.hiddenMenu{
    right: 0;
    position:fixed;
    flex-direction: column;
    justify-content: start;
    background-color:#222222;
    color: white;
    width: 300px;
    height: 100vh;
    z-index: 1;
}

#hideCloseMenu{
   width: 100%;
   text-align: center;
   padding: 0;
}

.hideMenuItem{
    font-family:'Playfair Display';
    font-size: 16px;
    height: 66px;
    width: 64px;
    text-decoration: none;
    align-content: center;
    color: white;
    padding-left: 40px;
    padding-right: 13.5px;
}

.menuContainer{
    display: flex;
    flex-direction: row;
}


.logoImg{
    margin-left: 10px;
    width: 40vw;
    place-content: center center;

}

.menuItem{
    display: none;
    font-family:'Open Sans';
    font-size: 14px;
    font-weight: bold;
    height: 66px;
    width: 64px;
    text-decoration: none;
    place-content:center center;
    text-align: center;
    color: white;

}

#menuBar{
    display: block;
    width:40vw;
}

.menuItem:hover{
    background-color: white;
    color: black;
}
.headLinkContainer{
    display: none;
    flex-direction: row;
    margin-left: 20px;
   place-content: center center;
 
}

.headLink{
 
    height: 66px;
    place-content:center center; 
}

.headLinkItem{

    padding: 6px;
    background-color:black;
    text-decoration: none;
    font-size: large;
    color: white;
    border: solid black;
    border-radius: 100%;
}


#twitter:hover{
background-color:white ;
color: black;
}

#dribbble:hover{
    background-color: rgb(252, 6, 149);
}

#instagram:hover{
    background-color: rgb(170, 89, 12);
}

.signedIn{
    color: black;
    background-color: #05f318;
}

@media screen and (min-width: 376px){
    .header{
        padding-left: 85px;
        padding-right: 85px;
    }
    .logoImg{
        height: 66px;
        width: auto;
    }
    #menuBar{
        height: 66px;
        width: 64px;
        padding-left: 13.5px;
        padding-right: 13.5px;
    }
}


@media screen and (min-width: 576px){
    .headLinkContainer{
        display: flex;
    }
}

@media screen and (min-width: 1032px) {
    .menuItem{
       display: block;
       padding-left: 10px;
       padding-right: 10px;
    }
    #menuBar{
        display: none;
    }
    
};
        </style>
 <div id='hiddenMenu' class='hiddenMenu' style='display: none;'>
        <a id='hideCloseMenu' class='hideMenuItem' onclick='hideMenu()'><i class='fa fa-close'></i></a>
        <a id='hideHome' class='hideMenuItem' href='./index.html'>Home</a>
        <a id='hideAbout' class='hideMenuItem' href='./about.html'>About</a>
        <a id='hideBlog' class='hideMenuItem' href='./blogs/index.html?page=1'>Blog</a>
        <a id='hideContact' class='hideMenuItem' href='./contact.html'>Contact</a>
        <a id='hideProduct' class='hideMenuItem' href='./product/index.html?page=1'>Product</a>
        <a id='hideSignIn' class='hideMenuItem' href='./SignIn.html?registerMode=signIn'>Sign In</a>

    </div>

    <header class='header'>

        <a href='./index.html'>
            <img class='logoImg'
            src='https://kriesi.at/themes/enfold-elegant-portfolio/wp-content/uploads/sites/77/2018/04/logo.png' alt=''>
        </a>

        <div class='menuContainer'>
            <a href='#' id='menuBar' class='menuItem' onclick='showMenu()'><i class='fa fa-bars'
                    style='font-size: 30px;'></i></a>
            <a id='home' class='menuItem' href='./index.html'>Home</a>
            <a id='about' class='menuItem' href='./about.html'>About</a>
            <a id='blog' class='menuItem' href='./blogs/index.html?page=1'>Blog</a>
            <a id='contact' class='menuItem' href='./contact.html'>Contact</a>
            <a id='product' class='menuItem' href='./product/index.html?page=1'>Product</a>
            <a id='signIn' class='menuItem' href='./SignIn.html?registerMode=signIn'>Sign In</a>
            <div class='headLinkContainer'>
                <div class='headLink'>
                    <a id='twitter' class='headLinkItem fa fa-twitter' href=''></a>
                </div>
                <div class='headLink'>
                    <a id='dribbble' class='headLinkItem fa fa-dribbble' href=''></a>
                </div>
                <div class='headLink'>
                    <a id='instagram' class='headLinkItem fa fa-instagram' href=''></a>
                </div>
            </div>
        </div>

    </header>
`
    }
}

class Footer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML=`
 <style>
            .footer{
                width: 85vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                justify-items: center;
            }

            .linkContainer {
                display: flex;
                flex-direction: row;
                justify-content: center;
                margin: 20px;
                flex-wrap: wrap;

            }

            .footerLinkItemContainer {
                width: 50px;
                height: 50px;
                display: flex;
                flex-direction: column;
                justify-content: end;
                align-content: center;
                align-items: center;
                margin: 0 10px 30px;


            }

            .footerLinkItemExplain {
                display: none;
                font-family: 'open sans';
                font-size: 15px;
                color: #ffffff;
                background-color: #222222;
                padding: 20px 10px;
                width: 100px;
                text-align: center;
                z-index: 2;
            }

            .footerLinkItem {
                width: 15px;
                height: 15px;
                place-content: center center;
                padding: 10px;
                background-color: #222222;
                text-decoration: none;
                font-size: 15px;
                color: white;
                border: solid #222222;
                border-radius: 100%;
                text-align: center;
            }

            .separator {
                background-color: #ffffff;
                color: #222222;
                border: none;
                text-align: center;
                text-decoration: none;
            }

            .footerItem {
                font-family: 'open sans';
                font-size: 15px;
                color: #b0b0b0;
                text-align: center;
                text-decoration: none;
                width: 100%;
                margin: 16px 0;
            }

            .inputEmail {
                text-align: center;
                width: 85vw;
                display: flex;
                flex-direction: column;
                align-content: space-around;
            }

            #footerEmail {
                font-family: 'open sans';
                font-size: 15px;
                color: #b0b0b0;
                padding: 13px;
                height: 20px;
                border: solid #222222 2px;
                margin: 5px;
            }

            #footerSubmit {
                font-family: 'open sans';
                font-size: 15px;
                color: #b0b0b0;
                padding: 13px;
                margin: 5px;
                height: 50px;
                background-color: #ffffff;
                border: solid #222222 2px;
            }

            #footerSubmit:hover {
                background-color: #222222;
            }

            #footerLinkItemContainer1:hover #footerLinkItemExplain1 {
                display: inline;
            }

            #footerLinkItemContainer2:hover #footerLinkItemExplain2 {
                display: inline;
            }

            #footerLinkItemContainer3:hover #footerLinkItemExplain3 {
                display: inline;
            }

            #footerLinkItemContainer4:hover #footerLinkItemExplain4 {
                display: inline;
            }

            #footerLinkItemContainer5:hover #footerLinkItemExplain5 {
                display: inline;
            }

            #footerLinkItemContainer6:hover #footerLinkItemExplain6 {
                display: inline;
            }

            @media screen and (min-width: 480px) {
                .inputEmail {
                flex-direction: row;
                justify-content: center;
            }
            #footerEmail {
                width: 100%;
            }
            }

            @media screen and (min-width: 768px) {
                #footerEmail {
                width: 19vw;
            } 
            }
        </style>
        <footer class='footer'>
            <div class='linkContainer'>
                <div id='footerLinkItemContainer1' class='footerLinkItemContainer'>
                    <span id='footerLinkItemExplain1' class='footerLinkItemExplain'>Fallow me on Twitter</span>
                    <a class='footerLinkItem fa fa-twitter' href=''></a>
                </div>
                <div id='footerLinkItemContainer2' class='footerLinkItemContainer'>
                    <span id='footerLinkItemExplain2' class='footerLinkItemExplain'>Fallow me on Facebook</span>
                    <a class='footerLinkItem fa fa-facebook' href=''></a>
                </div>
                <div id='footerLinkItemContainer3' class='footerLinkItemContainer'>
                    <span id='footerLinkItemExplain3' class='footerLinkItemExplain'>Fallow me on Dribbble</span>
                    <a class='footerLinkItem fa fa-dribbble' href=''></a>
                </div>
                <div id='footerLinkItemContainer4' class='footerLinkItemContainer'>
                    <span id='footerLinkItemExplain4' class='footerLinkItemExplain'>Follow me on Instagram</span>
                    <a class='footerLinkItem fa fa-instagram' href=''></a>
                </div>
                <div id='footerLinkItemContainer5' class='footerLinkItemContainer'>
                    <span id='footerLinkItemExplain5' class='footerLinkItemExplain'>Fallow me on Linkedin</span>
                    <a class='footerLinkItem fa fa-linkedin' href=''></a>

                </div>
                <div id='footerLinkItemContainer6' class='footerLinkItemContainer'>
                    <span id='footerLinkItemExplain6' class='footerLinkItemExplain'>Get in touch</span>
                    <a class='footerLinkItem fa fa-envelope' href=''></a>
                </div>
            </div>
          

                <a class='linkItem separator fa fa-star' href=''></a>

            
            <h4 class='footerItem' style='font-family: Playfair Display ;font-size: 18px; color: #777777;'>Subscribe
            </h4>
            <p class='footerItem' style='font-family: open sans ; color: #777777;'>Get our latest news, tips and tricks
            </p>
            <div class='inputEmail'>
                <input id='footerEmail' type='email' placeholder='E-Mail*' required>
                <input id='footerSubmit' type='button' value='submit'>
            </div>
            <p class='footerItem'>
                <a class='footerItem' href='#'>About</a>
                |
                <a class='footerItem' href='#'>Imprint</a>
                |
                <a class='footerItem' href='#'>Contact</a>
                |
                <a class='footerItem' href='https://kriesi.at/privacy-policy'>Privacy Policy</a>
            </p>
            <a class='footerItem' href='http://kriesi.at'>© 2018 Enfold by Kriesi</a>
        </footer>
`
    }
}

customElements.define('header-component', Header);
customElements.define('footer-component', Footer);