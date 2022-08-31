import React from "react";
import { useContext } from "react";
import "./Footer.css";
import { themeContext } from "../../Context";
const Footer = () => {

  const x = window.matchMedia("(max-width: 500px)");

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="footer">
      {
        !x.matches &&
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,128L80,112C160,96,320,64,480,64C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      }
      {/* <img src={Wave} alt="" style={{ width: "100%" }} /> */}
      <div className="f-content">
        <div className="f-icons">
          <a target={"_blank"} rel="noreferrer" href="https://github.com/harsh6603">
            <i className="fa-brands fa-github" style={{color:(darkMode)?"white":"black"}}></i>
          </a>
          <a target={"_blank"} rel="noreferrer"  href="https://www.linkedin.com/in/harsh-thakkar-79101b217/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2BgWU5NPUQKmesp3JImWY9g%3D%3D">
            <i className="fa fa-linkedin" style={{color:(darkMode)?"white":"black"}}></i>
          </a>
          <a href="/">
            <i className="fa fa-whatsapp" style={{color:(darkMode)?"white":"black"}}></i>
          </a>
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} /> */}
        </div>
        <span style={{color:(darkMode)?"white":"black"}}>Designed And Developed By Harsh Thakkar</span>
      </div>
    </div>
  );
};

export default Footer;
