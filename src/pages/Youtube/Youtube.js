import React, { useState } from "react";
import "./Youtube.css";
import YTLogo from "../../images/youtube_logo-removebg-preview.png";
import Accordion from "../../components/accordion/Accordion";
import Accordion2 from "../../components/Accordion2/Accordion2";
import { accordionData } from "../../data/accordionMockData";

function Youtube() {
  const [openedIndex, setOpenedIndex] = useState(3);
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

      {/* <div className="right">
        {accordionData.map((data, id) => (
          <Accordion
            question={data.question}
            answer={data.answer}
            setIndex={setOpenedIndex}
            currentIndex={openedIndex}
            key={data.id}
            id={data.id}
          />
        ))}
      </div> */}
      <div className="left">
        {accordionData.map((data)=>( <Accordion2 Q={data.question} A={data.answer} id={data.id}/>))}
      </div>
    </div>
  );
}

export default Youtube;
