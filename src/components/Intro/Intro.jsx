import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import coder from "../../front-end-image.png"
import Resume from './resume.pdf';

const Intro = () => {

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Harsh Thakkar</span>
          <span style={{color:(darkMode)?"white":"black"}}>
            MERN Stack Developer 
          </span>
        </div>
        {/* <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link> */}
        <a href={Resume} download>
          <button className="button">Download CV</button>
        </a> 
        {/* social icons */}
        <div className="i-icons">
          <a target={"_blank"} href="https://github.com/harsh6603">
            <i className="fa-brands fa-github"></i>
          </a>
          <a target={"_blank"} href="https://www.linkedin.com/in/harsh-thakkar-79101b217/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2BgWU5NPUQKmesp3JImWY9g%3D%3D">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
          {/* <img src={Github} alt="" /> */}
          {/* <img src={LinkedIn} alt="" /> */}
          {/* <img src={Instagram} alt="" /> */}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img className="mobileView" src={coder} alt="coder" />
      </div>
    </div>
  );
};

export default Intro;
