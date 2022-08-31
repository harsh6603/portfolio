import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import Temple from "../../temple.png";
import News from "../../news.png"
import Notes from "../../notes.png"

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      <div className="container1">
        <div className="row">
          <div className="col">
            <div className="card" style={{backgroundColor:(darkMode)?"#303132":"#f7f7f7",color:(darkMode)?"white":"black"}} >
              <img src={Temple} alt="" />
              <div className="card-body">
                <h5 className="card-title">Temple Website</h5>
                <p className="card-text">I developed this website using HTML, CSS, Javascript, PHP.I used MySQL as database.This website contain video, Daily darshan of goad, login functionality to store favorite videos.</p>
                <a target={"_blank"} href="https://github.com/harsh6603/Temple-website" className="btn btn-primary">
                  <i className="fa-brands fa-github"></i>
                  <small>GitHub</small>
                </a>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card" style={{backgroundColor:(darkMode)?"#303132":"#f7f7f7",color:(darkMode)?"white":"black"}} >
              <img src={News} alt="" />
              <div className="card-body">
                <h5 className="card-title">New24 - News Website</h5>
                <p className="card-text">I make this news website using react.This news website shows entertainment, sports, science, health and all types of news.I use NewsAPI for getting live updated news.In this site I use infinite scrolling also.</p>
                <a target={"_blank"} href="https://github.com/harsh6603/News-react-app" className="btn btn-primary">
                  <i className="fa-brands fa-github"></i>
                  <small>GitHub</small>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{backgroundColor:(darkMode)?"#303132":"#f7f7f7",color:(darkMode)?"white":"black"}} >
              <img src={Notes} alt="" />
              <div className="card-body">
                <h5 className="card-title">NotesCloud - Notes App</h5>
                <p className="card-text">I make this app using MERN Stack. In this app user can store it notes, update and delete his notes. In this site user also store his notes in his label. In this site user can also restore his deleted notes. User can archive his notes.</p>
                <div className="d-flex justify-content-between">
                  <a target={"_blank"} href="https://github.com/harsh6603/Notescloud" className="btn btn-primary">
                    <i className="fa-brands fa-github"></i>
                    <small>GitHub</small>
                  </a>
                  <a target={"_blank"} href="https://notecloud-notes-app.herokuapp.com/" className="btn btn-primary">
                    <i class="fa fa-desktop"></i>
                    <small>Live</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slider */}
    </div>
  );
};

export default Portfolio;
