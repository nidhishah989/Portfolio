import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import HomeSection from './components/HomeSection/homeSection';



function App() {
  return (
    <div className="App">
     <Router>
      <div>
        <Navbar />
        <HomeSection />
      </div>
    </Router>
    </div>
  );
}

export default App;
