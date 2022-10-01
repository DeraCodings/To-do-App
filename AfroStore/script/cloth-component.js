// Creating a component for clothing section

const clothCard = document.createElement('template');

clothCard.innerHTML = `
    <style>
        div{
            position: relative;
            width: 15.4375rem;
            height: 21.875rem;
            text-align: center;
            /*border: 1px solid cornflowerblue;*/
        }
        
        img{
            border-radius: 10px;
            /*width: 21.875em;
            height: 21.875em;*/
            object-fit: cover;
        }

        h4{
            /*color: rgba(255,255,255,0.9);*/
            backdrop-filter: blur(5px);
            position: absolute;
            font-family: serif;
            bottom: .5em;
            right: 3em;
        }

        @media (max-width:700px){
            div{
                width: 15.4375rem;
                height: 21.875rem;
            }
            img{
                /*width: 15.6rem;
                height: 15.6rem;*/
                object-fit: cover;
            }
            h4{
                /*left: 2em;*/
            }
        }
    </style>
    <div>
        <img>
        <h4></h4>
    </div>
`;

// ES6 class syntax to create the custom component

class ClothCard extends HTMLElement{
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(clothCard.content.cloneNode(true));
        this.shadowRoot.querySelector('h4').innerText = this.getAttribute('name').toUpperCase();
        this.shadowRoot.querySelector('img').setAttribute('src', this.getAttribute('bg-img'));
        this.shadowRoot.querySelector('h4').style.color = this.getAttribute('bg-color');
        // this.shadowRoot.querySelector('div').style.background = `url(${this.getAttribute('bg-img')}) center cover`;
    }
}

window.customElements.define('cloth-card', ClothCard);

// const width = document.body.clientWidth;

// // console.log(width);
// const body = document.getElementById('main-header');

// body.innerHTML += `<strong>${width}</strong>`;