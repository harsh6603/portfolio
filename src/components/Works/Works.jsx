import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import alian from "../../img/alian_software.webp"
import Certificate from "./internship_certificate.pdf";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works" >
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Experience
          </span>
          <span>Companys</span>
          <spane>
            I have completed my summer internship of 1 month at Alian Software Located at Anand Work From Office.
            I have learned Javascript from basic and Learn nodeJS and expressJS through out my training Period.
            I also learn how to store and retrive data from mongoDB database.
            <br />
          </spane>
          {/* <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link> */}
          <div className="d-flex justify-content-start">
            <button className="button duration">1 June 2022 to 30 Jun 2022</button>

            <a style={{textDecoration:"none"}} target={"_blank"} rel="noreferrer" href={Certificate} className="button certificate mx-2" download>
              <i className="fa fa-file-text"></i>
              <small>Certificate</small>
            </a>
          </div>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <img src={alian} alt={"ABC"} />
      </div>
    </div>
  );
};

export default Works;
