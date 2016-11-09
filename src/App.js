import React, { Component } from 'react';
import logo from './assets/logo.png';
import creative from './assets/creative.png';
import simple from './assets/simple.png';
import thoughtful from './assets/thoughtful.png';
import './App.css';
import bannerscreenshot from './assets/bannerscreenshot.png';
import {ValueTitle, ValueDetails} from './values';
import ProjectCard from './projectcard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.openContactModal = this.openContactModal.bind(this);
    this.closeContactModal = this.closeContactModal.bind(this);
  }

  closeContactModal() {
    this.setState({ showModal: false });
  }

  openContactModal() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className="App">
        <section
          className="header-section" id="header-section"
        >
          <div className="header-text">
            <img src={logo} className="logo"/>
            <ul className="nav-links">
              <li className="nav-link"><a href="#projects">Home</a></li>
              <li className="nav-link"><a href="#values">Values</a></li>
              <li className="nav-link"><a href="#about">About</a></li>
              <li className="nav-link"><a
                  href="#projects"
                  onClick={this.openContactModal}
                >Contact</a>
              </li>
            </ul>
          </div>
        </section>
        <ProjectCard
          childId="f1_card"
          className="project project1" parentId="f1_container"
          frontText="4050 Yonge St "
          backText="here is more text on the back!"
        />
        <section id="projects">
          <ProjectCard
            className="project project2"
            title="Hanen"
            description="Calendar"
          />
          <ProjectCard
            className="project project3"
            title="proj 3"
          />
          <ProjectCard
            className="project project4"
          />
          <ProjectCard
            className="project project5"
            title="proj 5"
          />
          <ProjectCard
            className="project project6"
            title="proj 6"
          />
          <ProjectCard
            className="project project7"
            title="proj 7"
          />
          <ProjectCard
            className="project project8"
            title="proj 8"
          />
          <ProjectCard
            className="project project9"
            title="proj 9"
          />
        </section>

        <section id="values">
          <ValueTitle id="core" word="Core" />
          <ValueDetails
            className="values simple"
            imgSrc={simple}
          />
          <ValueDetails
            className="values thoughtful"
            imgSrc={thoughtful}
          />
          <ValueDetails
            className="values creative"
            imgSrc={creative}
          />
          <ValueDetails
            className="values details-1"
            valueDetails="Expressing ideas and concepts is difficult; Good visual design is a language. Communication is intuive, live, and tactile."
          />
          <ValueDetails
            className="values details-2"
            valueDetails="Recognizing the need is the primary conditions for design. <br />Listening, observing, understanding, sympathizing and, empathizing allows us to glean insights from what was previously not seen."
          />
          <ValueDetails
            className="values details-3"
            valueDetails="Where do new ideas come from? Contrast creates the opportunity to create unique solutions and answers. Through questions, we derive answers and create new creative opportunies."
          />
          <ValueTitle id="value" word="Values" />
        </section>

      <section id="about">
        <div classname="profile-pic-container">
          <img src="http://seaotters.com/wp-content/uploads/2012/03/628x353-otter-cu-yawn.jpg"
          className="profile-pic"
          />
        </div>
        <div className="about-text"
        >
          <h1>About </h1>
          <p>Bacon ipsum dolor amet boudin flank pastrami alcatra, pork chop strip steak ham pork belly beef ribs cow landjaeger. Sausage kevin sirloin rump, cow pork tail. Bresaola picanha ham sausage pig ground round pork belly andouille turkey. Strip steak cupim meatball sausage beef ribs chicken chuck pastrami boudin. Shoulder tenderloin ball  p venison, andouille tri- p short ribs. Fatback landjaeger corned beef beef ribs cow sirloin salami pork bacon t-bone short loin beef bresaola capicola. Tongue bacon short loin shank.
Ham hock short loin beef shankle kielbasa sirloin pig tri- p pastrami salami burgdoggen biltong. Corned beef pork chop burgdoggen</p>
        </div>
      </section>

      <section id="contact">
        <div className="contact-pic">
          <img src={logo} className="logo"/>
          <p> let's talk about your next project </p>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <div className="contact-form">
          <div className="contact-field">
          <label> Email Address:</label>
          <input
            htmlfor="emailAddress"
            type="text"
            value="email"
            />
          </div>
          <div className="contact-field">
          <label> Subject:</label>
          <input
            htmlfor="emailAddress"
            type="text"
            value="subject"
            />
          </div>
          <div className="contact-field">
          <label> Message:</label>
          <input
            htmlfor="emailAddress"
            type="text"
            value="message"
            />
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default App;
