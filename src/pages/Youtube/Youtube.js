import React from "react";
import "./Youtube.css";
import YTLogo from "../../images/youtube_logo-removebg-preview.png";
import Accordion from "../../components/accordion/Accordion";
import { accordionData } from "../../data/accordionMockData";

function Youtube() {
  return (
    <div className="youtubebody">
      <div className="sidebar">
        <div className="logo">
          <span className="barline"></span>
          <span className="barline"></span>
          <span className="barline"></span>
          <div className="youtubelogo">
            <img src={YTLogo} alt="" title="" id="ytl" />
            <p id="YTNG">
              YouTube<sup>NG</sup>
            </p>
          </div>
        </div>
        <div className="home"></div>
        <div className="you"></div>
        <div className="subscriptions"></div>
      </div>

      <div className="right">
        {
          accordionData.map((data, id)=>(

              <Accordion question={data.question} answer={data.answer} />
          ))
        }
      </div>
    </div>
  );
}

export default Youtube;
