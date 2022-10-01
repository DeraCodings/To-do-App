const nav = document.createElement('template');

nav.innerHTML = `
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Helvetica;
            text-decoration: none;
        }

        .nav-bar{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .nav-bar button{
            /*width: 2rem;*/
            cursor: pointer;
            border: none;
            padding: .5em 1em;
            border-radius: 5px;
            background-color: rgba(200,150,255,0.9);
            color: rgba(255,255,255,0.7);
            box-shadow: 0 3px 6px rgba(0,0,0,0.7);
            display: none;
        }
        .nav-bar button:focus,
        .nav-bar button:active{
            box-shadow: none;
        }

        #menu-btn img{
            width: 1.5rem;
            object-fit: cover;
        }

        #links a{
            display: inline-block;
            margin-right: 1em;
            color: rgba(0,0,0,0.7);
            transition: all 600ms;
        }
        #links a:hover{
            color: #000;
            /*font-weight: 600;*/
        }

        .hamburger-modal{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            background-color: rgba(0,0,0,0.8);
            width: 50vw;
            gap: 2em;
            padding: 1em .6em 1em;
        }
        .hamburger-modal a{
            display: inline-block;
            padding: .6em .1em;
            color: rgba(255,255,255,0.2);
            transition: 300ms;
        }
        
        .hamburger-closed span{
            color: rgba(255,255,255,0.2);
            font-size: 1.1em;
            cursor: pointer;
            transition: 300ms;
        }

        .hamburger-closed span:hover,
        .hamburger-modal a:hover{
            color: rgba(255,255,255,0.8);
        }

        .hamburger-closed{
            position: fixed;
            top: 0;
            left: -100%;
            /*left: 0;*/
            z-index: 1;
            background-color: rgba(0,0,0,0.3);
            height: 100vh;
            width: 100%;
            /*display: none;*/
            transition: 1000ms;
        }

        @media (max-width: 768px){

            #links{
                display: none;
            }

            #logo{
                font-size: .7em;
            }

            .nav-bar button{
                display: block;
                padding: .4em .5em;
            }
        }
    </style>
    <div id='navbar' class='nav-bar'>
        <button id='menu-btn'></button>
        <div id='logo'>
            <h1>
                AfricaExpress
            </h1>
        </div>
        <div id='links'>
            <a href='#'>Who We Are</a>
            <a href='#'>What We Offer</a>
            <a href='#'>African Heritage</a>
            <a href='#'>Contact Us</a>
        </div>
    </div>
    <div class='hamburger-closed'>
        <div class='hamburger-modal'>
            <span id='close-btn'>X</span>
            <a href='#'>Who We Are</a>
            <a href='#'>What We Offer</a>
            <a href='#'>African Heritage</a>
            <a href='#'>Contact Us</a>
        </div>
    </div

`;

class NavCard extends HTMLElement{
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(nav.content.cloneNode(true));
        this.shadowRoot.getElementById('menu-btn').innerHTML = `<img src='../images/more.png'>`;
    }

    openMenu() {
        this.shadowRoot.querySelector('.hamburger-closed').style.left = '0';
    }

    outsideClick() {
        this.shadowRoot.querySelector('.hamburger-closed').style.left = '-100%';
        // if (e.target === 'hamburger-closed') {
        // }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#menu-btn').addEventListener('click', ()=>this.openMenu());
        this.shadowRoot.querySelector('#close-btn').addEventListener('click', () => {
            this.shadowRoot.querySelector('.hamburger-closed').style.left = '-100%';
        });
        this.shadowRoot.querySelector('.hamburger-closed').addEventListener('click', this.outsideClick());
    }
}

window.customElements.define('nav-card', NavCard);