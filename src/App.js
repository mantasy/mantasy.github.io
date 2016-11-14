import React, { Component } from 'react';
import logo from './assets/logo.png';
import creative from './assets/creative.png';
import simple from './assets/simple.png';
import thoughtful from './assets/thoughtful.png';
import './App.css';
// import bannerscreenshot from './assets/bannerscreenshot.png';
import {ValueTitle, ValueDetails} from './values';
import { ProjectCard } from './projectcard';

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
            <img src={logo} className="logo" role="presentation"/>
            <ul className="nav-links">
              <li className="nav-link"><a href="#projects">Home</a></li>
              <li className="nav-link"><a href="#values">Values</a></li>
              <li className="nav-link"><a href="#about">About</a></li>
              <li className="nav-link"><a
                  href="#contact"
                  //onClick={this.openContactModal}
                >Contact</a>
              </li>
            </ul>
          </div>
        </section>
      <section id="projects">
        <ProjectCard
          childId="f1_card"
          className="project project1" parentId="f1_container"
          frontText="4050 Yonge St "
          backText="here is more text on the back!"
        />
      </section>

        <section id="values">
          <ValueTitle id="core" word="Core" />
          <ValueDetails
            className="simple"
            imgSrc={simple}
          />
        <ValueDetails
            className="thoughtful"
            imgSrc={thoughtful}
          />
          <ValueDetails
            className="creative"
            imgSrc={creative}
          />
          {[
            {
              class: 'details-1',
              text: 'Expressing ideas and concepts is difficult; Good visual design is a language. Communication is intuive, live, and tactile.'
            },
            {
              class: 'details-2',
              text:'Recognizing the need is the primary conditions for design. Listening, observing, understanding, sympathizing and, empathizing allows us to glean insights from what was previously not seen'
            },
            {
              class: 'details-3',
              text:'Where do new ideas come from? Contrast creates the opportunity to create unique solutions and answers. Through questions, we derive answers and create new creative opportunies.'
            }
          ].map( (elem) => <ValueDetails className={elem.class} valueDetails={elem.text} />)
          }
          <ValueTitle id="value" word="Values" />
        </section>

      <section id="about">
        <div classname="profile-pic-container">
          <img src="http://seaotters.com/wp-content/uploads/2012/03/628x353-otter-cu-yawn.jpg"
          className="profile-pic"
          role="presentation"
          />
        </div>
        <div className="about-text">
          <h1>About </h1>
          <p>Bacon ipsum dolor amet boudin flank pastrami alcatra, pork chop strip steak ham pork belly beef ribs cow landjaeger. Sausage kevin sirloin rump, cow pork tail. Bresaola picanha ham sausage pig ground round pork belly andouille turkey. Strip steak cupim meatball sausage beef ribs chicken chuck pastrami boudin. Shoulder tenderloin ball  p venison, andouille tri- p short ribs. Fatback landjaeger corned beef beef ribs cow sirloin salami pork bacon t-bone short loin beef bresaola capicola. Tongue bacon short loin shank.
Ham hock short loin beef shankle kielbasa sirloin pig tri- p pastrami salami burgdoggen biltong. Corned beef pork chop burgdoggen</p>
        </div>
      </section>

      <section id="contact">
        <div className="contact-pic">
          <img src={logo} className="logo" role="presentation"/>
          <p> let's talk about your next project </p>
          {[1, 2, 3, 4].map((i) => (<div className='dot'></div>))}
        </div>

        <div className="contact-form">
          <div className="contact-field">
            <form action="https://formspree.io/misato.okutsu2@gmail.com"
                method="POST">
              <label>Email: </label><input type="email" name="email" /> <br /><br />
              <label>Subject: </label> <input type="text" name="subject" /> <br /><br />
              <label> Message: </label> <input type="text" name="message" /> <br /><br />
              <label>Submit!</label><input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default App;
