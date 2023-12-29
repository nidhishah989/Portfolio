// src/components/HomeSection.jsx
import React from 'react';
import "./homeSec.css";
import NSCARTOON from "../../style/Images/NSCarton.png";
import hicarton from "../../style/Images/hi1.png";

const HomeSection = () => {
  return (
    
    <div className="container-fluid mx-auto align-items-center py-lg-5 py-3" id="mainhome">
         
            <div class="row align-items-center justify-content-center my-lg-5 py-lg-5 mx-auto">
                <div class="col-lg-5 col my-lg-4 py-4 mt-4 d-flex justify-content-lg-end justify-content-center">
                    <div class="row align-items-center">
                        <div class="col-2">
                            <ul class="list-group align-items-center justify-content-center" id="connectls">
                                <li class="list-group-item">
                                <span><a href="https://www.linkedin.com/in/nidhishah989/" target="_blank" rel="noopener noreferrer" style={{ color: '#d64c31' }}>
                    <i className="bi bi-linkedin"></i> 
                  </a> </span>
                                    {/* <span style="color:#d64c31;"><i class="bi bi-linkedin"></i></span> */}
                                </li>
                                <li class="list-group-item">
                                    <span><a href="https://github.com/nidhishah989" target="_blank" rel="noopener noreferrer" style={{ color: '#00807a' }}>
                    <i className="bi bi-github"></i>
                  </a></span>
                                </li>
                                <li class="list-group-item">
                                    <span><a href="mailto:you@example.com" style={{ color: '#d64c31' }}>
                    <i className="bi bi-envelope-fill"></i>
                  </a></span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-10 d-flex justify-content-center mx-auto">
                        <img className="nsimg img-fluid" src={NSCARTOON} alt="NS" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-7 col-12 mt-lg-5">
                    <div
                        class="row align-items-center justify-content-start mx-auto text-center text-align-center my-lg-5 my-2 gy-3">
                        <div class="col-lg-2 col d-flex align-items-center justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 1 1">
                <image href={hicarton} height="1" width="1" />
              </svg>
                            <span class="display-6">Hi!</span>
                        </div>
                        <div class="col-lg-7 col-12 p-0 d-flex align-items-center justify-content-lg-start justify-content-center">
                            <span class="display-6 p-0 mx-1">I'm</span> <span class="display-5 name p-0"> NIDHI
                                SHAH</span>
                        </div>
                        <div class=" col-lg-8 col-12 tagtext mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-quote" viewBox="0 0 16 16">
                                <path
                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                            </svg>
                            A detail-oriented <b><i>Full Stack Developer</i></b> --- crafting robust
                            functionality and
                            elegant user experiences.
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote opquaote" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
              </svg>
                        </div>
                        <div class="col-lg-8 col-12 mb-2 d-flex justify-content-center">
                            <a><button class="btn homebut mx-3"> Resume</button> </a>
                            <a><button class="btn homebut"> Contact Me</button> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  );
};

export default HomeSection;
