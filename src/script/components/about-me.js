/* eslint-disable no-underscore-dangle */
class AboutMe extends HTMLElement {
  _shadowRoot = null;

  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
      .container {
        display: flex;
        flex-direction: row-reverse;
        gap: 30px;
        margin: 60px 85px 60px 60px;        
        justify-content: space-around;
        align-items: center;
      }
  
      .about-me p {
          font-size: 20px;
          margin-right: 7em;
      }
  
      .about-me h2 {
          font-size: 3em;
          margin-top: 50px;
          margin-bottom: 20px;
      }

      .woman-icon {
        width: 44px;
      }
  
      .connect {
        display: flex;
        gap: 10px;
        justify-content: flex-start;
        flex-direction: column;
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

      .sosmed p {
        font-size: 15px;
        font-style: italic;
      }

      .sosmed img {
        cursor: pointer;
        margin-right: 10px;
        width: 40px;
        height: 40px;
      }
  
      .avatar img {
          transform: scaleX(-1);
      }

      .connect a {
        text-decoration: none; 
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
      <section class="container" id="about-me">
          <div class="about-me">
              <h2>Let me introduce myself <img src="./public/woman.png" class="woman-icon"></h2>
              <p>I am an IT student with design skills, currently delving into the world of Front-End Development and UI/UX design. I am also has a firm interest in social media marketing & branding, and human resources. I am always eager to learn about new developments in technology and enjoy learning from the experiences of others.</p>
              <div class="connect">
                <a href="https://drive.google.com/file/d/1DvTDkiaHAwtoa9mNtRFg8VYYScySpMq8/view?usp=sharing" target="_blank"><button class="button" role="button">Download CV</button></a>        
              <div class="sosmed">
                <p> Or Connect with me : </p>
                <a href="https://www.linkedin.com/in/sitirahma/" target="_blank"><img src="./public/linkedin.png"></a>
                <a href="https://github.com/strahma-ti" target="_blank"><img src="./public/github.png"></a>
                <a href="https://www.instagram.com/sirarhma/" target="_blank"><img src="./public/instagram.png"></a>                              
                </div>
              </div>
          </div>
          <div class="avatar">
              <img src="./public/avatar(3).PNG" class="brand-icon">
          </div>
      </section>
          `;
  }
}

customElements.define('about-me', AboutMe);
