/* eslint-disable no-underscore-dangle */
class ContactMe extends HTMLElement {
  _shadowRoot = null;

  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
    .contact-me {
        display: flex;
        margin: 7em 3em 7em 3em;
        justify-content: center;    
    }

    .container {
        padding: 1em 2em 1em 2em;
        width: 60em;
        gap: 20px;
        border-radius: 25px;
        background: linear-gradient(91.13deg, #ececee 0%, #fff 0%, #737278c7 100%);
        display: flex;
        justify-content: space-around;
        align-items: center;    
    }

    .container img {
        width: 10em;
    }

    .first-section p {
        font-size: 15px;
    }

    .contact p {
        font-size: 20px;
        font-weight: 500;
    }

    .second-section {
        font-size: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .second-section .contact p{
        font-size: 20px;
    }


    .email-button {
        all: unset;
        font-size: 16px;
        background: transparent;
        border: none;
        position: relative;
        color: #f0f0f0;
        cursor: pointer;
        z-index: 1;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        font-family: "Ubuntu", sans-serif;
      }

      .email-button a {
        text-decoration: none; 
        color: white;
      }
  
      .email-button::after,
      .email-button::before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -99999;
        transition: all .4s;
      }
  
      .email-button::before {
        transform: translate(0%, 0%);
        width: 100%;
        height: 100%;
        background: #28282d;
        border-radius: 10px;
      }
  
      .email-button::after {
        transform: translate(10px, 10px);
        width: 35px;
        height: 35px;
        background: #ffffff15;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-radius: 50px;
      }
  
      .email-button:hover::before {
        transform: translate(5%, 20%);
        width: 110%;
        height: 110%;
      }
  
      .email-button:hover::after {
        border-radius: 10px;
        transform: translate(0, 0);
        width: 100%;
        height: 100%;
      }
  
      .email-button:active::after {
        transition: 0s;
        transform: translate(0, 5%);
      }
        `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
        <div class="contact-me">
            <div class="container" data-aos="zoom-in-up">
                <img class="avatar" src="/public/avatar(4).png">
                <div class="first-section">
                    <h1>I'm available for every opportunity!</h1>
                    <p>Wanna team up? Need a hand with your project? Or <br>just feel like saying hi? I'm all ears!</p>
                </div>
                <div class="second-section">
                    <div class="contact">
                        <p>Contact me at:</p>
                    </div>
                    <div class="email">
                        <button class="email-button">
                            <a href="mailto:strahmasti@gmail.com">strahmasti@gmail.com</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
          `;
  }
}

customElements.define('contact-me', ContactMe);
