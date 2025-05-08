import React, { useState } from "react";
import "../accordion/accordion.css";
import addIcon from "../../images/plus.png";
import minusIcon from "../../images/minus.png";

const Accordion = (props) => {
  // const [isOpened, setIsOpened] = useState(false);
  const isOpened = String(props.currentIndex) === props.id;
  return (
    <div className="item">
      <div className="question-header">
        <p className="question">
          {props.id}. {props.question}
        </p>
        <div
          className="add-icon"
          onClick={() => {
            isOpened ? props.setIndex() : props.setIndex(props.id);
          }}
        >
          {isOpened ? <img src={minusIcon} /> : <img src={addIcon} />}
        </div>
      </div>
      {isOpened && <p className="answer">{props.answer}</p>}
    </div>
  );
};

export default Accordion;
