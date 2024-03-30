/* eslint-disable no-underscore-dangle */
class AppBar extends HTMLElement {
  _shadowRoot = null;

  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
            .app-bar{
            height: 50px;
            width: 96%;
            z-index: 100000;
            top: 0;
            position: fixed;
            display: flex;
            align-items: center;
            background: #FFFDF9;
            padding: 20px 30px;
            border-radius: 12px;
            transition: box-shadow 0.3s ease;
            }

            .app-bar.scrolled {
                box-shadow: 0 5px 15px #5b626824; 
            }

            .app-bar .brand-name{
                display: flex;
                align-items: center;
            }

            .brand-icon{
                padding-right: 15px;
                border-radius: 50%;
                width: 50px;
                height: 50px;
            }
            .nav-links {
                display: flex;
                margin-left: auto;
                gap: 5em;
            }
            .nav-links li{
            list-style: none;
            margin: 0 12px;
            }
            .nav-links li a{
            position: relative;
            color: #333;
            font-size: 20px;
            font-weight: 500;
            padding: 6px 0;
            text-decoration: none;
            }
            .nav-links li a:before{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 3px;
            width: 0%;
            background: #fbacd3;
            border-radius: 12px;
            transition: all 0.4s ease;
            }
            .nav-links li a:hover:before{
            width: 100%;
            }
            .nav-links li.center a:before{
            left: 50%;
            transform: translateX(-50%);
            }
            .nav-links li.upward a:before{
            width: 100%;
            bottom: -5px;
            opacity: 0;
            }
            .nav-links li.upward a:hover:before{
            bottom: 0px;
            opacity: 1;
            }
            .nav-links li.forward a:before{
            width: 100%;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.4s ease;
            }
            .nav-links li.forward a:hover:before{
            transform: scaleX(1);
            transform-origin: left;
            }
        `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();

    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        this._shadowRoot.querySelector('.app-bar').classList.add('scrolled');
      } else {
        this._shadowRoot.querySelector('.app-bar').classList.remove('scrolled');
      }
    });
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += ` 
    <div class="app-bar">   
        <div class="brand-name">
            <img src="./public/avatar.jpeg" class="brand-icon">
            <h2>Siti Rahmah</h2>
        </div>  
        <ul class="nav-links">
            <li class="center"><a href="#about-me">About me</a></li>
            <li class="upward"><a href="#project-card">Project</a></li>
            <li class="forward"><a href="#contact-me">Contact me</a></li>
        </ul>
    </div>
      `;
  }
}

customElements.define('app-bar', AppBar);
