import React from 'react'
import { useContext } from "react";
import { GameStateContext } from "./QuizPages/Context";
import { Questions } from "./QuizPages/Questions";

const Result = (props) => {
  const { score, setScore, setGameState } = useContext(
    GameStateContext
  );

  const game = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="container">
      <center>
      <div className="ResultBg">
        <center><img src="/confetti.png" style={{marginTop:"70px"}} height="90px" width="90px"/></center>
        <h4 style={{color:"#e58281",textAlign:"center",marginTop:"25px"}}>Congratulations</h4>
        <h4 style={{color:"#0AC0D5",marginTop:"40px",textAlign:"center"}}>You have scored {score} / {Questions.length} </h4>

        </div></center>
        </div>
  )
}

export default Result;
