import React from "react";
import "../style/nav.css";
import logo from "../style/Images/NS3.png"

function Navbar (){
   
    return (
        <nav class="navbar container-fluid col-sm-12">
                <div>
                     <a class="navbar-brand" href="#home">
                        {/* <span className="initialFL">N</span><span>S</span> */}
                         <img src={logo} alt="Bootstrap" />
                     </a>
                </div>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active d-sm-none" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
            <span className="symbol-tab"><i className="bi bi-house-fill"></i></span> 
        </button>
        <button class="nav-link d-none d-sm-inline" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
            <span className="name-tab">Home</span> 
        </button>
        {/* <!-- About Me Tab --> */}
        <button class="nav-link d-sm-none" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
            <span className="symbol-tab"><i className="bi bi-file-earmark-person-fill"></i></span>
        </button>
        <button class="nav-link d-none d-sm-inline" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
            <span className="name-tab">About Me</span>
        </button>

        {/* <!-- Skills Tab --> */}
        <button class="nav-link d-sm-none" id="nav-skills-tab" data-bs-toggle="tab" data-bs-target="#nav-skills" type="button" role="tab" aria-controls="nav-skills" aria-selected="false">
            <span className="symbol-tab">S</span>
        </button>
        <button class="nav-link d-none d-sm-inline" id="nav-skills-tab" data-bs-toggle="tab" data-bs-target="#nav-skills" type="button" role="tab" aria-controls="nav-skills" aria-selected="false">
            <span className="name-tab">Skills</span>
        </button>

        {/* <!-- Projects Tab --> */}
        <button class="nav-link d-sm-none" id="nav-projects-tab" data-bs-toggle="tab" data-bs-target="#nav-projects" type="button" role="tab" aria-controls="nav-projects" aria-selected="false">
            <span className="symbol-tab">P</span>
        </button>
        <button class="nav-link d-none d-sm-inline" id="nav-projects-tab" data-bs-toggle="tab" data-bs-target="#nav-projects" type="button" role="tab" aria-controls="nav-projects" aria-selected="false">
            <span className="name-tab">Projects</span>
        </button>

        {/* <!-- Contact Me Tab --> */}
        <button class="nav-link d-sm-none" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
            <span className="symbol-tab">C</span>
        </button>
        <button class="nav-link d-none d-sm-inline" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
            <span className="name-tab">Contact Me</span>
        </button>


    
  </div>
                {/* <div>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#home">Home</a>
                        class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#project">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact Me</a>
                    </li>
                    
                </ul>
                </div> */}
        </nav>
        // <nav className="navbar">
        //     <div className="navbar-logo">
        //         <a href="#home">
        //         <img src={logo} alt="Nidhi Shah"/>
        //         </a>
        //     </div>
        //     <ul className="navbar-links">
        //         <li className="active"><a href="#home">Home</a></li>
        //         <li><a href="#about">About Me</a></li>
        //         <li><a href="#project">Projects</a></li>
        //         <li><a href="#skills">Skills</a></li>
        //         <li><a href="#contact">Contact Me</a></li>
        //     </ul>
        // </nav>
    );
}

export default Navbar;