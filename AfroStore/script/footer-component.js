const footer = document.createElement('template');

footer.innerHTML = `
    <style>
        *{
            margin: 0;
            padding: 0;
        }

        .container{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1em 0;
            color: #fff;
        }
        .container div div, h3{
            margin-bottom: 1em;
            text-align: center;
        }
        h3{
            font-family: cursive;
        }
    </style>
    <div class='container'>
        <div>
            <h3>Contact Information</h3>
            <div>
                <h4>Mailing Address</h4>
                <span>18 Ibina St. Aba, Abia State</span>
            </div>
            <div>
                <h4>Email Address</h4>
                <span>support&commat;africaexpress.com</span>
            </div>
            <div>
                <h4>Phone Number</h4>
                <span>(123) 456-7890</span>
            </div>
        </div>
    </div>
`;

class FooterCard extends HTMLElement{
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(footer.content.cloneNode(true));
        this.shadowRoot.querySelector('.container').style.background = `url(${this.getAttribute('src')}) center`;
        // this.shadowRoot.querySelector('.container').style.color = ``;
    }
}

window.customElements.define('footer-card', FooterCard);