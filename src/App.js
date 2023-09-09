import  styles from './App.module.css';
import {Navbar} from './components/Navbar/Navbar';
import {Hero} from './components/Hero/Hero';
import { About } from './components/Education/About';
import { Contact } from './components/contact/contact';
import {Experience} from './components/Experience/Experience';
import {Projects} from './components/Projects/Projects';
import Skills from './components/skills/skills';

function App() {
  return (
    <div className={styles.App}>

    <Navbar/>
    <Hero/>
    <About/>
    <Experience/> 
    <Skills/>
    <Projects/> 
    <Contact/>

    </div>
  );
}

export default App;
