import { useState } from "react";
import React from "react";

import { useContext } from "react";
import { GameStateContext } from "./Context";
import { Questions } from "./Questions";


export default function Page1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, setGameState } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };
  return (
    <>
    <div className="container">
      <div className="MyPlayTitle">
        <h3>Title : Technology</h3>
      </div>
      <div className="MyPlayBg">
        <div className="row ml-5">
          <div className="col mt-5">
            <h5 style={{ color: "#5C5C5C" }}>
            {Questions[currentQuestion].prompt}
            </h5>
          </div>
        </div>
        <div className="Optdiv">
          <div className="form-check">
            <input
              className=" radio form-check-input ml-1 mt-3"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onClick={() => {
                chooseOption("optionA");
              }}
              
              
            />
            <label className="form-check-label ml-5" for="flexRadioDefault1">
              <h5
                style={{
                  marginTop: "12px",
                  paddingRight: "30px",
                  color: "#4B4949",
                }}
              >
               {Questions[currentQuestion].optionA}
              </h5>
            </label>
          </div>
        </div>
        <div className="Optdiv">
          <div className="form-check">
            <input
              className=" radio form-check-input ml-1 mt-3"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onClick={() => {
                chooseOption("optionB");
              }}
            />
            <label className="form-check-label ml-5" for="flexRadioDefault2">
              <h5
                style={{
                  marginTop: "12px",
                  paddingRight: "30px",
                  color: "#4B4949",
                }}
              >
               {Questions[currentQuestion].optionB}
              </h5>
            </label>
          </div>
        </div>
        <div className="Optdiv">
          <div className="form-check">
            <input
              className=" radio form-check-input ml-1 mt-3"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              onClick={() => {
                chooseOption("optionC");
              }}
            />
            <label className="form-check-label ml-5" for="flexRadioDefault3">
              <h5
                style={{
                  marginTop: "12px",
                  paddingRight: "30px",
                  color: "#4B4949",
                }}
              >
                {Questions[currentQuestion].optionC}
              </h5>
            </label>
          </div>
        </div>
        <div className="Optdiv">
          <div className="form-check">
            <input
              className=" radio form-check-input ml-1 mt-3"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
              onClick={() => {
                chooseOption("optionD");
              }}
            />
            <label className="form-check-label ml-5" for="flexRadioDefault4">
              <h5
                style={{
                  marginTop: "12px",
                  paddingRight: "30px",
                  color: "#4B4949",
                }}
              >
               {Questions[currentQuestion].optionD}
              </h5>
            </label>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <h5
                style={{
                  marginTop: "45px",
                  marginLeft: "50px",
                  color: "#4B4949",
                }}
              >
                Question : 1 / 10
              </h5>
            </div>
            <div class="col">
            
                {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} type="button" class="btn btn-primary" style={{
          marginTop: "40px",
          marginLeft: "10px",
          
        }}>Submit</button>
        ) : (
          <button onClick={nextQuestion} type="button" class="btn btn-primary"  style={{
            marginTop: "40px",
            marginLeft: "10px",
            
          }}>Next Question</button>
        )}
            

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
