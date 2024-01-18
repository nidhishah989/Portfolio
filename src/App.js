import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import HomeSection from './components/HomeSection/homeSection';
import AboutSection from './components/AboutSection/aboutSection';
import SkillsSection from './components/SkillSection/skillsection';
import WorkSection from './components/workSection/workSection';
import ProjectList from './components/workSection/worksec';



function App() {
  return (
    <div className="App">
     <Router>
      <div>
        <Navbar />
        <HomeSection />
        <AboutSection/>
        <SkillsSection/>
        {/* <WorkSection /> */}
        <ProjectList></ProjectList>
        
      </div>
    </Router>
    </div>
  );
}

export default App;
