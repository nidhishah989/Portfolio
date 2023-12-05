// src/components/HomeSection.jsx
import React from 'react';
import "./aboutSec.css";

const AboutSection = () => {
  return (
    <div className="container-fluid" id="about">
      <div className="aboutsec py-md-5">
        <div className="container">
          <div className="row mx-auto my-auto align-items-center justify-content-center text-center" id="aboutr">
            <div className="boxdeco text-center col-lg-6 col-12 mt-2">
              <h1 className="abouttitl">A LITTLE ABOUT ME</h1>
            </div>
            <div className="abttxt mx-auto col-md-8 col-10 my-md-5 py-md-5 my-1">
              <div className="mt-md-2">
                Greetings again from a Full Stack Developer located in the <span><i className="bi bi-geo-fill" style={{ color: '#d64c31' }}></i></span> Greater Seattle Area.
                With a profound desire to contribute to Society, I bring an analytical and practical mindset to navigate
                the tech landscape with a deep understanding of technology.
              </div>
              <div className="pt-3">
                I hold a master's degree in Computer Science.
                Skilled in crafting responsive and dynamic solutions within diverse project portfolios, utilizing a variety of front-end and back-end technologies.
              </div>
              <div className="pt-3 mb-md-2">
                Beyond coding, I enjoy cooking and exploring various TV series. Any recommendations?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
