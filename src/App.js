import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Project from "./component/Project";
import "./style/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Header />

        <div >
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
