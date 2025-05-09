import React, { useState } from "react";
import "../Accordion2/accordion2.css";
import addimg from '../../images/plus.png';
import removeimg from '../../images/minus.png';  

const Accordion2 = (props) => {
    const [opened, setOpened] = useState(false)
  return (
      <div className="Item">
        <div className="question" onClick={()=>{opened? setOpened(false) : setOpened(true)}}>
            <div className="question-header">{props.id}.{props.Q}</div>
            {opened ? <img src={removeimg} width={20}/> : <img src={addimg} width={20}/>}
        </div>
        
        {opened && 
       <div className="answer">
           <hr id="hr2"></hr>
         {props.A}
        </div>
        }
      </div>
  );
};

export default Accordion2;
