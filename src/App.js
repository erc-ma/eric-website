import ReactDOM from "react-dom";
import logo from './mooncake.png';
import dash from './linking.gif'
import starter from './dash.png'
import othello from './othello.gif'
import political from './political.gif'
import resume from './resume.pdf'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <title>Amongus</title>
      <header className="App-header">
        <nav className="nav-flex" aria-label="primary-navigation">
            <img src={logo}  className="App-logo" alt="Eric's Logo" tabindex="-1"/>
            <div className="flex-row">
                <a className="link" href="#projects">projects</a>
                <a className="link" href="#experience">experience</a>
                <a className="link" href="#resume">resume</a>
                {/* <a className="link" href="#socials">findMe!</a> */}

                <a className="link" target="_blank" href="https://half-lucid.web.app/">music</a>
            </div>
        </nav>

        <h1 className="main-title">eric ma</h1>
        <h3 className="sub-title"><a className="subtitle-link" target="_blank" href="https://brown.edu">brown '25</a></h3>
        <h3 className="sub-title">software intern <a className="subtitle-link"href="#experience"> @BrownDash</a></h3>
        <h3 className="sub-title">former dev <a className="subtitle-link"href="#experience" > @FullStack</a></h3>
        <div className='logos-row'>

          <div className="logo-square">
            <a target="_blank" href='https://github.com/erc-ma'>
              <img className="social-logo" src='https://cdn-icons-png.flaticon.com/512/25/25231.png'></img>
            </a>
          </div>
          <div className='logo-square'>
            <a target="_blank" href='https://www.linkedin.com/in/eric-ma-149041233/'>
              <img className="social-logo" src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'></img>
            </a>
          </div>
          <div className='logo-square'>
            <a target="_blank" href='https://mail.google.com/mail/?view=cm&fs=1&to=eric_ma@brown.edu'>
              <img className="social-logo" src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png'></img>
            </a>
          </div>
          
        </div>
        
        {/* <button>
          <div class="py-3 px-3 border rounded-lg border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="h-5 w-5 fill-black dark:fill-white">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
              </path>
            </svg>
          </div>
        </button> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="h-5 w-5 fill-black dark:fill-white">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
          </path>
        </svg> */}
      </header>

      <main className="App-main">
        <section id="projects">
          <h2 className="title">Projects</h2>
            <div className = "qualifications">
              
              <div className="exp-element">
                
                <a className = "exp-title" href='https://dash-starter-project-erc-ma.web.app/' target="_blank">multiCanvas</a>
                <div className='element'>
                  <p>
                    Built a 
                    hypermedia web app
                    to store and organize media within an unbounded 2D freeform canvas. <br></br><br></br>
                    Functionality for images, websites, text editing, and collections with 
                    linking
                    and 
                    stacking-views.
                  </p>

                  <div className='element-image'>
                    <img className="img-actual" src={starter}></img>
                    <figcaption>Used: React, Typescript, MobX, SCSS</figcaption>
                    
                  </div>
                </div>
              </div>

              <div className="exp-element">
              <a className = "exp-title" href='https://docs.google.com/document/d/1HTku3fCRDEVV06R4GFRqO8bOcXP4XqV22Dt3gOs2v8I/edit?usp=sharing' target="_blank">othello.</a>
              <div className='element'>
                <p>
                  Developed a strategy board game application that implements 3 levels of computer intelligence using recursive mini-max algorithm.
                </p>
                <div className='element-image'>
                  <img className="img-actual" src={othello}></img>
                  <figcaption>Used: Java (JavaFX Graphics)</figcaption>
                </div>
              </div>
              
              </div>
            </div>

        </section>

        <section id="experience">
          <h2 className="title">Experience</h2>
            <div className = "qualifications">

            <div className="exp-element">
                <a className = "exp-title" href="https://brown-dash.github.io/Dash-Documentation/about/" target="_blank">Brown Dash [Adobe-Funded Project](Software Intern)</a>
                <div className='element'>
                  <p>
                  Worked on a team-based multimedia web application under the supervision of Andries van Dam.<br></br><br></br>
                  Oversaw and implemented the functionality for geographic maps and pushpin to media linking.
                  </p>
                  <div className='element-image'>
                    <img className="img-actual" src={dash}></img>
                    <figcaption>Used: React, Typescript, MobX, SCSS</figcaption>
                    
                  </div>
                </div>
              </div>

              <div className="exp-element">
                <a className = "exp-title" href="https://www.linkedin.com/company/full-stack-at-brown/" target="_blank">Full Stack at Brown (Software Developer)</a>
                
                <div className='element'>
                  <p>
                  Created a dynamic website for the Brown Political Union with a team of developers, designers, and product manager.
                  </p>
                  <div className='element-image'>
                    <img className="img-actual" src={political}></img>
                    <figcaption>Used: React, Typescript, MobX, SCSS</figcaption>
                    
                  </div>
                </div>
              </div>


              <div className="exp-element">
                <h3>Some courses I took are:</h3>
                <ul className="course-list">
                  <li className='current-course'>Data Structures and Algorithms</li>
                  <li className='current-course'>Discrete Structures and Probability</li>
                  <li className='current-course'>OOP Design</li>
                  <li className='current-course'>CS Independent Study</li>

                  <li className='future-course'>Systems (taken before Summer 2024)</li>
                  <li className='future-course'>Deep Learning (taken before Summer 2024)</li>
                  <li className='future-course'>Algorithms (taken before Summer 2024)</li>
                  <li className='future-course'>Graphics (taken before Summer 2024)</li>
                  <li className='future-course'>Computer Languages (taken before Summer 2024)</li>
                  

                </ul>
                
              </div>

            </div>
        </section>
        <section id="resume">
          <h2 className="title">Resume</h2>
          <iframe src={resume} title="eric-ma-resume">
          </iframe>
          <div className='logos-row'>

            <div className="logo-square">
              <a target="_blank" href='https://github.com/erc-ma'>
                <img className="social-logo" src='https://cdn-icons-png.flaticon.com/512/25/25231.png'></img>
              </a>
            </div>
            <div className='logo-square'>
              <a target="_blank" href='https://www.linkedin.com/in/eric-ma-149041233/'>
                <img className="social-logo" src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'></img>
              </a>
            </div>
            <div className='logo-square'>
              <a target="_blank" href='https://mail.google.com/mail/?view=cm&fs=1&to=eric_ma@brown.edu'>
                <img className="social-logo" src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png'></img>
              </a>
            </div>
            <div className='logo-square'>
              <a target="_blank" href='https://www.instagram.com/erc.ma'>
                    <img className="social-logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png'></img>
                </a>
            </div>
            <div className='logo-square'>
              <a target="_blank" href='https://ericmaa753.myportfolio.com/'>
                <img className="social-logo" src='https://cdn.iconscout.com/icon/free/png-256/free-adobe-portfolio-2522508-2132696.png'></img>
              </a>
            </div>
          </div>
        </section>


      </main>




    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));