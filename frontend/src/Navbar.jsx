import { Link } from "react-router-dom";
import "./styles.css";
import {GiHamburgerMenu} from "react-icons/gi";
import React,{ useState } from "react";
import logos from "./logo_small.svg";
import logo1 from "./logo_big_rendered.svg"

export default function Navbar() {

  const[showMediaIcons,setShowMediaIcons] = useState(false);

  return (
    <div className="nav">

      <Link to="/" className="home" onClick={()=>{setShowMediaIcons(false)}}>
        <img src = {logo1} className="logo"/> <img src = {logos} className="logos"/>
      </Link>
        <a className = "dhm" tabIndex="1" onClick = {()=>{setShowMediaIcons(!showMediaIcons)}}>
          <GiHamburgerMenu className="hm"/>
        </a>

      
      <div className = {showMediaIcons ? "other_three_pages mobile": "other_three_pages"}>
        <Link to="/practice" className="links">
          <span className="ll" onClick={()=>{setShowMediaIcons(!showMediaIcons)}}>Practice</span>
        </Link>
        <Link to="/about" className="links" onClick={()=>{setShowMediaIcons(!showMediaIcons)}}>
          <span>About</span>
        </Link>
      </div>
    </div>
  );
}
