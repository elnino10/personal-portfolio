import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar';
import HomeBanner from './components/HomeBanner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeBanner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
