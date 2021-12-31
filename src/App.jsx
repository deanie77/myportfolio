import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen,yesMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} yesMenuOpen={yesMenuOpen}/>
      <Menu menuOpen={menuOpen} yesMenuOpen={yesMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
