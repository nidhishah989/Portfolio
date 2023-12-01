// src/components/HomeSection.jsx
import React from 'react';
import "./homeSec.css";
import NSCARTOON from "../../style/Images/NSCartoon.png";

const HomeSection = () => {
  return (
    <div className="container-fluid p-0" id="mainhome">
      <section className="homesec mx-auto">
        <div className="row mx-auto" id="homer">
          <div className="col-md-2 col-2 contlinksset d-flex align-items-center justify-content-end px-0">
            <ul className="list-group align-items-center justify-content-center" id="connectls">
              <li className="list-group-item">
                <span><i className="bi bi-linkedin"></i></span>
              </li>
              <li className="list-group-item">
                <span><i className="bi bi-github"></i></span>
              </li>
              <li className="list-group-item">
                <span><i className="bi bi-envelope-fill"></i></span>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-9 d-flex align-items-center justify-content-center px-0">
            <img className="nsimg" src={NSCARTOON} alt="NS" />
          </div>
          <div className="col-md-7 col-12 d-flex align-items-center">
            <div className="htxt">
              <ul className="list-group introbox mx-auto mx-md-0 py-md-5 mt-md-5">
                <li className="list-group-item d-xl-flex align-items-center">
                  <div>
                    <img src="hi.png" alt="" className="img-fluid mr-2" />
                  </div>
                  <div>
                    <span className="display-5 pl-2">Hi there, I'm </span>
                  </div>
                  <div>
                    <span className="display-4 name"> NIDHI SHAH</span>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <span className="tagline">
                    <div className="tagtext">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-quote" viewBox="0 0 16 16">
                        <path
                          d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                      </svg>
                      A detail-oriented <b><i>Full Stack Developer</i></b> --- crafting robust functionality and
                      elegant user experiences.
                      <svg className="opquaote" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                        <path
                          d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                      </svg>
                    </div>
                  </span>
                </li>
                <li className="list-group-item py-0 pt-md-4 d-flex justify-content-center">
                  <a>
                    <button className="btn homebut mx-3"> Resume</button>
                  </a>
                  <a>
                    <button className="btn homebut"> Contact Me</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-content-center text-center down-arrow">
          <div className="col">
            <span className="display-6"><i className="bi bi-chevron-bar-down"></i></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
