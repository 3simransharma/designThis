import Navbar from "./Navbar.jsx";
import Home from "./pages/Home.jsx";
import Practice from "./pages/Practice.jsx";
import About from "./pages/About";
import Contact from "./Contact.jsx";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Navbar className="topnav" />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home className="random" />} />
          <Route path="/practice" element={<Practice className="random" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      {/* <div className="backg"></div> */}
      </div>
      {/* <footer>©Simran Sharma 2023, All rights reserved</footer> */}
    </div>
  );
}
