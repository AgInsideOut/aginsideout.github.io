import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Photogrphy from "./pages/Photography/Photography.jsx";
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route exact path="/photogrphy" element={<Photogrphy />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
