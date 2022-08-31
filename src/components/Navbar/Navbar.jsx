import React from "react";
import { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
const Navbar = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const x = window.matchMedia("(max-width: 500px)");

  const callChangeNavbarWidth = () => {
    const list = document.getElementById("list");
    const myModal = document.getElementById("myModal");
    myModal.style.display = "block";
    setTimeout(() => {
      list.classList.remove("n-list-hide");
      list.classList.add("n-list");
    }, 50);
  }

  window.onclick = function (e) {
    const myModal = document.getElementById("myModal");
    const list = document.getElementById("list");
    //when user click on modal
    if (e.target === myModal) {
      list.classList.remove("n-list");
      list.classList.add("n-list-hide");
      setTimeout(() => {
        myModal.style.display = "none";
      }, 300)
    }
  }

  const displayNone = () => {
    const myModal = document.getElementById("myModal");
    const list = document.getElementById("list");
    //when user click on modal
    list.classList.remove("n-list");
    list.classList.add("n-list-hide");
    setTimeout(() => {
      myModal.style.display = "none";
    }, 300)
  }

  return (
    <div className="n-wrapper" id="Navbar" style={{backgroundColor: (darkMode)?"#242526":"white",boxShadow:(darkMode)?"0px 0px 20px 0px rgb(255 255 255 / 60%)":"0px 0px 20px 0px rgb(78 78 78 / 20%)"}}>
      {/* left */}
      <div className="n-left">
        {
          x.matches && <i className="fa-solid fa-bars" style={{ cursor: "pointer", fontSize: "20px", color: (darkMode)?"white":"black" }} onClick={callChangeNavbarWidth}></i>
        }
        
        <div className="n-name">Harsh</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        {
          x.matches
            ?
            <div id="myModal" className="modalForNavbar">
              <div id="list" className="n-list-hide">
                <ul style={{ listStyleType: "none",color:(darkMode)?"black":"black" }}>
                  <li>
                    <Link activeClass="active" to="Intro" spy={true} smooth={true} onClick={displayNone}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="services" spy={true} smooth={true} onClick={displayNone}>
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link to="works" spy={true} smooth={true} onClick={displayNone}>
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link to="portfolio" spy={true} smooth={true} onClick={displayNone}>
                      Protfolio
                    </Link>
                  </li>
                  {/* <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li> */}
                </ul>
              </div>
            </div>
            :
            <div className="n-list">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="services" spy={true} smooth={true}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="works" spy={true} smooth={true}>
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="portfolio" spy={true} smooth={true}>
                    Protfolio
                  </Link>
                </li>
                {/* <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li> */}
              </ul>
            </div>
        }
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
