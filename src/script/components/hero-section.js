/* eslint-disable no-underscore-dangle */
class HeroSection extends HTMLElement {
  _shadowRoot = null;

  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
    .hero-section {
        display: flex;
        margin: 120px 50px 30px 50px;        
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .welcome-message p {
        font-size: 25px;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    @keyframes waving {
      0% { transform: rotate(0deg); }
      50% { transform: rotate(30deg); }
      100% { transform: rotate(0deg); }
    }

    .emoji-waving {
      animation: waving 2s infinite;
      width: 30px;
    }

    .welcome-message h2 {
        opacity: 75%;
        font-size: 5em;
        margin-top: 50px;
        margin-bottom: 20px;
    }

    .welcome-message .role {
        font-size: 30px;
    }

    .avatar img {
        transform: scaleX(-1);
    }

    .button {
      all: unset;
      width: 100px;
      height: 30px;
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

    .button::after,
    .button::before {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -99999;
      transition: all .4s;
    }

    .button::before {
      transform: translate(0%, 0%);
      width: 100%;
      height: 100%;
      background: #28282d;
      border-radius: 10px;
    }

    .button::after {
      transform: translate(10px, 10px);
      width: 35px;
      height: 35px;
      background: #ffffff15;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border-radius: 50px;
    }

    .button:hover::before {
      transform: translate(5%, 20%);
      width: 110%;
      height: 110%;
    }

    .button:hover::after {
      border-radius: 10px;
      transform: translate(0, 0);
      width: 100%;
      height: 100%;
    }

    .button:active::after {
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
    <div class="hero-section">
        <div class="welcome-message">
            <p>Hi! <img class="emoji-waving" src="./public/waving.png"></img>Welcome, I am </p>
            <h2>Siti<br>Rahmah</h2>
            <p class="role">A Front-End Developer,<br>and UI/UX Designer From Indonesia</p>
            <a href="#about-me" class="button" role="button">Who are you?</a>
        </div>
        <div class="avatar">
            <img src="./public/avatar(2).PNG" class="brand-icon">
        </div>
    </div>
        `;
  }
}

customElements.define('hero-section', HeroSection);
