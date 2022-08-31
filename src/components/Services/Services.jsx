import React, { useContext, useState } from "react";
import "./Services.css";
// import Card from "../Card/Card";
// import HeartEmoji from "../../img/heartemoji.png";
// import Glasses from "../../img/glasses.png";
// import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const Services = () => {
  const [content, setContent] = useState("");
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  const labels = ["HTML", "CSS", "Javascript", "ReactJS"];
  const fData = [65, 70, 80, 81];

  const labelsBackEnd = ["PHP", "NodeJS", "ExpressJS", "MongoDB", "MySQL"];
  const lData = [75, 89, 80, 70, 75]

  const data = {
    labels: (content === "Front End") ? labels : labelsBackEnd,
    datasets: [{
      label: (content === "Front End") ? 'Front End Skills' : 'Back End Skills',
      barThickness: 36,
      maxBarThickness: 28,
      barPercentage: 0.9,
      categoryPercentage: 1,
      data: (content === "Front End") ? fData : lData,
      backgroundColor: [
        'rgb(62 132 255)',
        'rgb(62 132 255)',
        'rgb(62 132 255)',
        'rgb(62 132 255)',
      ],

      borderWidth: 1,
    }]
  };


  const change = (e) => {
    console.log(e.target.innerHTML);
    setContent(e.target.innerHTML);
  }


  return (
    <div className="services" id="services" >
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}
        <button className="button s-button" onClick={change}>Front End</button>
        <button className="button s-button" onClick={change}>Back End</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}

      <div className='dtyleDiv'>
        <Bar
          data={data}
          options={
            {
              layout: {
                padding: {
                  left: 100
                }
              },
              scales: {
                x: {
                  ticks: {
                    color: (darkMode) ? "white" : ""
                  },
                  grid: {
                    display: false
                  }
                },
                y: {
                  ticks: {
                    color: (darkMode) ? "white" : ""
                  },
                  grid: {
                    display: false
                  }
                }
              }

            }
          }
        />
      </div>
    </div>
  );
};

export default Services;
