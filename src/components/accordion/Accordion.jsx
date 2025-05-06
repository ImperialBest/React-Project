import React, { useState } from "react";
import "../accordion/accordion.css";
import addIcon from "../../images/plus.png";
import minusIcon from "../../images/minus.png";

const Accordion = (props) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="item">
      <div className="question-header">
        <p className="question">{props.question}</p>
        <div className="add-icon" onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? <img src={minusIcon} /> : <img src={addIcon} />}
        </div>
      </div>
      {isOpened && <p className="answer">{props.answer}</p>}
    </div>
  );
};

export default Accordion;
