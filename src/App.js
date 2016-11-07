import React, { Component } from 'react';
import logo from './assets/logo.png';
import creative from './assets/creative.png';
import simple from './assets/simple.png';
import thoughtful from './assets/thoughtful.png';
import './App.css';
import bannerscreenshot from './assets/bannerscreenshot.png';

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

        <section id="projects">
          <div
            className="project project1"
          >
            <h1>4050 Yonge St </h1>
            <h2>RFP Proposal </h2>
          </div>

          <div
            className="project project2"
          >
            <h1>Hanen</h1>
            <h2>Calendar </h2>
          </div>
          <div
            className="project project3"
          >
            <h1>proj3</h1>
          </div>
          <div
            className="project project4"
          >
            <h1>proj4</h1>
          </div>
          <div
            className="project project5"
          >
            <h1>proj5</h1>
          </div>
          <div
            className="project project6"
          >
            <h1>proj6</h1>
          </div>
          <div
            className="project project7"
          >
            <h1>proj7</h1>
          </div>
          <div
            className="project project8"
          >
            <h1>proj8</h1>
          </div>
          <div
            className="project project9"
          >
            <h1>proj9</h1>
          </div>
        </section>

        <section id="values">
          <div className="values" id="core">
            <h1>Core </h1>
          </div>

          <div
            className="values simple"
          >
            <img src={simple} className = "values-img"/>
          </div>
          <div
            className="values thoughtful"
          >
            <img src={thoughtful} className="values-img"/>
          </div>
          <div
            className="values creative"
          >
            <img src={creative} className="values-img"/>
          </div>
          <div
            className="values details-1"
          >
            <p>Expressing ideas and concepts is difficult; <br />Good visual design is a language. <br /> Communication is intuive, live, and tactile.</p>
          </div>
          <div
            className="values details-2"
          >
            <p>Recognizing the need is the primary conditions for design. <br />Listening, observing, understanding, sympathizing and, empathizing allows us to glean insights from what was previously not seen.</p>
          </div>
          <div
            className="values details-3"
          >
            <p>Where do new ideas come from? <br />Contrast creates the opportunity to create unique solutions and answers. Through questions, we derive answers and create new creative opportunies.</p>
          </div>
          <div
            className="values" id="value"
          >
            <h1>Values</h1>
          </div>
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
