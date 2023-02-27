import './App.css';
import Contact from './Components/Contact/Contact';
import Github from './Components/Github/Github';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import Skills from './Components/Skill/Skills';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Github />
      <Contact />
    </div>  
  );
}

export default App;
