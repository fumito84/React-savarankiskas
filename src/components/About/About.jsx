import React from "react";
import Header from "../Header/Header";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          I am a web developer. This is what I do, and my current skills.
        </p>
        <div className="row">
          <div className="col">
            <div className="get-to-know">
              <h2>More about me!</h2>
              <p>
                I'm Tomas Vasiljevas. My nickname in GitHub - fumito84. I'm front-end web developer.
                
              </p>
            </div>
          </div>
          <div className="col">
            <div className="skills">
              <h2>My skills</h2>
              <div className="row">
                <div className="col-auto">
                  <div className="skills-skill">HTML</div>
                  <div className="skills-skill">CSS</div>
                  <div className="skills-skill">JavaScript</div>
                  <div className="skills-skill">Node</div>
                  <div className="skills-skill">React</div>
                  {/* <div className="skills-skill">Github</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;