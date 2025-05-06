import React, { useEffect, useState } from "react";
import "./Introduction.css";

const Introduction = () => {
  const [calcData, setCalcData] = useState("");
  const [_answer, setAnswer] = useState(0);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const inputData = (newInputData) => {
    if (hasCalculated) {
      setHasCalculated(false);
      if (/[0-9\.]/.test(newInputData)) {
        setCalcData(newInputData);
      } else {
        setCalcData(`Ans${newInputData}`);
      }
    } else {
      setCalcData((prev) => {
        return prev + newInputData;
      });
    }
  };
  const calculate = () => {
    try {
      let pattern = /\b0+(\d+)\b/g;
      let answerPattern = /Ans/g;
      console.log(calcData);
      let currentCalcData = calcData.replace(pattern, "$1");
      currentCalcData = currentCalcData.replace(answerPattern, _answer);
      currentCalcData = currentCalcData.replace(/\^/g, "**");

      console.log(currentCalcData);

      let answer = eval(currentCalcData);
      setAnswer(answer);
      setCalcData(calcData + "=" + answer);
      setHasCalculated(true);
    } catch (error) {
      setCalcData(error);
    }
  };
  const clear = () => {
    setCalcData("");
    setHasCalculated(false);
  };
  const deletevalue = () => {
    setCalcData((previous) => {
      let backIndex = 1;
      if (/Ans$/.test(previous)) {
        backIndex = 3;
      } else if (/\D$/.test(previous)) {
        return "";
      }
      return previous.substring(0, previous.length - backIndex);
    });
  };
  const time = () => {
    let currentDate = new Date();
    let currentDateString = `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`;
    return currentDateString;
  };
  useEffect(() => {
    window.addEventListener("keydown", (e)=>{
      if(e.keyCode === 13){
        console.log("Enter pressed");
        
      }
    }
    )
    setInterval(() => {
      setCurrentTime(time());
    }, 1000);
  }, []);
  // useEffect(() => {
  //   console.log(`Calc data is : ${calcData}`);
  // }, [calcData]);
  return (
    <div>
      <marquee direction="right" className="intro">
        How was your learning so far?
      </marquee>
      <div className="CalculatorBody">
        <div className="header">
          <div className="timeContainer">{currentTime}</div>
          <p className="CalcSignature">ImperialCalculator</p>
        </div>
        <input
          type="text"
          value={calcData}
          id="CalIput"
          onChange={(e) => setCalcData(e.target.value)}
        />
        <div className="buttonbody">
          <button className="buttonbodyItem" onClick={() => inputData("9")}>
            9
          </button>
          <button className="buttonbodyItem" onClick={() => inputData("8")}>
            8
          </button>
          <button className="buttonbodyItem" onClick={() => inputData("7")}>
            7
          </button>
          <button className="buttonbodyItem" onClick={() => inputData("+")}>
            +
          </button>
          <button className="buttonbodyItem" onClick={() => inputData("6")}>
            6
          </button>
          <button className="buttonbodyItem" onClick={() => inputData("5")}>
            5
          </button>
          <button className="buttonbodyItem" onClick={() => inputData("4")}>
            4
          </button>
          <button className="buttonbodyItem" onClick={() => inputData("-")}>
            -
          </button>
          <button className="buttonbodyItem" onClick={() => inputData("3")}>
            3
          </button>
          <button className="buttonbodyItem" onClick={() => inputData("2")}>
            2
          </button>
          <button className="buttonbodyItem" onClick={() => inputData("1")}>
            1
          </button>
          <button className="buttonbodyItem" onClick={() => inputData("*")}>
            *
          </button>
          <button className="buttonbodyItem" onClick={() => inputData("0")}>
            0
          </button>
          <button className="buttonbodyItem" onClick={() => inputData(".")}>
            .
          </button>
          <button
            className="buttonbodyItem"
            onClick={() => "=" + calculate("=")}
          >
            =
          </button>

          <button className="buttonbodyItem" onClick={() => inputData("/")}>
            /
          </button>

          <button className="buttonbodyItem" onClick={() => inputData("(")}>
            (
          </button>
          <button className="buttonbodyItem" onClick={() => inputData(")")}>
            )
          </button>
          <button className="buttonbodyItem" onClick={() => inputData("^")}>
            ^
          </button>
          <button className="buttonbodyItem" onClick={() => inputData("Ans")}>
            Ans
          </button>

          <button className="buttonbodyItem" onClick={deletevalue}>
            Del
          </button>
          <button className="buttonbodyItem" onClick={clear}>
            AC
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

// setCalcData((previousValue) => {
//   return previousValue + newInputData;
// });
// let _allowInput = true;
// if (["+", "-", "*", "/"].includes(secretData[secretData.length - 2]) && secretData[secretData.length - 1] === '0') {
//   _allowInput = false;
// } else {
//   _allowInput = true;
// }
// if (secretData === "0") {
//   _allowInput = false;
// }
// if(newInputData === "0"){
//   if(_allowInput){
//     setSecretData(prev=>{
//       return (prev + newInputData)
//     })
//   }
// }else{
//   setSecretData(prev=>{
//     return (prev + newInputData)
//   })
// }

// try {
//   // let answer = secretData + " = " + eval(secretData);
//   // setCalcData(answer);
//   let answer = eval(secretData)
//   console.log("Answer ", answer);

//   setSecretData(prev=>{
//     return(prev + " = " + answer )
//   })
// } catch (err) {
//   console.log(err);

//   setCalcData(`${String(err).split(":")[0]}`);
// }

// setCalcData((previous) => {
//   let backIndex = 1;
//   if (previous[previous.length - backIndex] === "s") {
//     backIndex = 3;
//   }
//   return previous.substring(0, previous.length - backIndex);
// });
// setSecretData(prev=>{
//   let backIndex = 1
//   return prev.substring(0, prev.length - backIndex)
// })
