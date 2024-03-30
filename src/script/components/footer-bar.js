/* eslint-disable no-underscore-dangle */
class FooterBar extends HTMLElement {
  _shadowRoot = null;

  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `

    .footer-section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .contact {
      border-radius: 2em;
      margin: 1em;
      background: #28282d;
      display: flex;
    }

    .contact > div {
      transition: background-color 0.5s;
      border-color: black;
      margin: 3px;
      cursor: pointer;
      font-weight: 500;
    }

    .email {
      padding: 0 35px
    }

    .email a{
      text-decoration: auto;
      color: white;
    }
    
    .github {
      padding: 0 35px
    }

    .github a{
      text-decoration: auto;
      color: white;
    }

    .linkedin {
      padding: 0 35px
    }

    .linkedin a{
      text-decoration: auto;
      color: white;
    }

    .contact div:hover {
      color: black;
      background-color: #ffffff63;
      border-radius: 2em;
    }

    .copyright p {
      margin-top: 1px;
      margin-bottom: 2em;

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
    <div class="footer-section">
      <div class="contact">
        <div class="email">
          <p><a href="mailto:strahmasti@gmail.com">Email</a></p>
        </div>
        <div class="github">
          <p><a href="https://github.com/strahma-ti">Github</a></p>
        </div>
        <div class="linkedin">
          <p><a href="https://www.linkedin.com/in/sitirahma/"> Linkedin</a></p>
        </div>
      </div>
      <div class="copyright">
        <p>© Copyright 2024. Made by Siti Rahmah</p>
      </div>
    </div>
      `;
  }
}

customElements.define('footer-bar', FooterBar);
