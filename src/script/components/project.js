/* eslint-disable no-underscore-dangle */
class ProjectCard extends HTMLElement {
  _shadowRoot = null;

  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `

    .project-section {
      margin: 60px 85px 60px 60px;        
    }

    .main-title {
      margin-bottom: 35px;
      margin-top: 6em;
      display: flex;
      flex-direction: column;
      align-items: center;
     }

     .title {
      display: flex;
      align-items: center;
      font-size: 3em;
      margin: 1px;
      gap: 10px;
    } 

    .title img {
      width: 45px;
    }

    .main-title .paragraph {
      font-size: 17px;
    }

    .project-row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-content: center;
        align-items: center;
        gap: 25px;
    }

    .link-deploy {
      text-decoration: none; 
      color: #000; 
    }

    .project-card {
      background-color: #FFFDF9;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      width: 20em;
      height: 32em;
      margin: 10px;
      padding: 15px;
      border-radius: 30px;
      box-shadow: 0 16px 40px #37404a63;
      position: relative;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }
    
    .project-card:hover {
      box-shadow: 0 24px 48px #9aaacf55;
      transform: translateY(-20px);
    }

    .project-card::before {
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
      bottom: 271px;
      content: "";
      position: absolute;
      width: 20em;
      height: 25%;
      background: linear-gradient(to bottom, rgb(0 0 0 / 0%) 0%, #20262e 100%);    
    }

    .project-card img {
      width: 20em;
      border-radius: 12px;
    }

    .project-title h3 {
      font-size: x-large;
      color: white;
      margin: 14px;
      z-index: 9999;
      position: absolute;
      top: 220px;
    }

    .project-overview p {
      margin-top: 30px;
      margin-bottom: 5px;
    }

    .project-stack {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .project-card .project-stack span {
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 1px 7px 1px 7px;
      color: white;
      border-radius: 30px;
      background-color: #31363F;
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
    <section class="project-section" id="project">
      <div class="main-title">
        <h2 class="title">PROJECTS<img src="./public/sheaf.png"></h2>
        <p class="paragraph">Explore the projects I've worked on so far</p>
      </div>
      <div class="project-row" data-aos="fade-down">
      <a href="https://playful-sopapillas-adb08a.netlify.app/" class="link-deploy" target="_blank">
        <div class="project-card">
          <img src="./public/trendz-resto.png">
          <div class="project-title">
            <h3>Trendz Resto</h3>
          </div>
          <div class="project-overview">
            <p>Trendz-Resto" is a web platform sourcing restaurant data from an API. It offers restaurant recommendations, detailed information, and the ability to add favorites.</p>
          </div>
          <div class="project-stack">
            <span class="stack">JavaScript</span>
            <span class="stack">HTML</span>
            <span class="stack">CSS</span>
            <span class="stack">Webpack</span>
            <span class="stack">Node.js</span>
          </div>
      </div>
      </a>
      <a href="https://www.saveourspecies.my.id/" class="link-deploy" target="_blank">
          <div class="project-card">
            <img src="./public/sos.png">
            <div class="project-title">
              <h3>Save Our Species</h3>
            </div>
            <div class="project-overview">
              <p>Save our species is a protected animal platform built with a dedicated team using React.js, Tailwind, Webpack, Axios and other technologies with a MongoDB database.</p>
            </div>
            <div class="project-stack">
              <span class="stack">JavaScript</span>
              <span class="stack">React.js</span>
              <span class="stack">Tailwind</span>
              <span class="stack">HTML</span>
              <span class="stack">CSS</span>
              <span class="stack">Webpack</span>
              <span class="stack">Axios</span>
              <span class="stack">MongoDB</span>
              <span class="stack">Node.js</span>
            </div>
        </div>
      </a>
      <div class="project-card">
        <img src="./public/flawsome.jpeg">
      <div class="project-title">
        <h3>Flawsome</h3>
      </div>
      <div class="project-overview">
        <p>FLAWSOME is a dynamic e-commerce platform showcasing premium skincare products from Indonesian brands. Built with PHP, HTML, CSS, and mySQL, FLAWSOME offers a seamless shopping experience.</p>
      </div>
      <div class="project-stack">
        <span class="stack">PHP</span>
        <span class="stack">HTML</span>
        <span class="stack">CSS</span>
        <span class="stack">mySQL</span>
      </div>
    </div>
    <div class="project-card">
        <img src="./public/joeen.png">
      <div class="project-title">
        <h3>JOEEN</h3>
      </div>
      <div class="project-overview">
        <p>JOEEN (read: join) is a website that provides recommendations for events, communities, books, songs, and movies to help young people develop both themselves and their surroundings.</p>
      </div>
      <div class="project-stack">
        <span class="stack">Javascript</span>
        <span class="stack">Webpack</span>
        <span class="stack">HTML</span>
        <span class="stack">CSS</span>
        <span class="stack">Node.js</span>
      </div>
    </div>
      </div>  
    </section>
        `;
  }
}

customElements.define('project-card', ProjectCard);
