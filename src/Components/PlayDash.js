import React from "react";
import { GameStateContext } from "./QuizPages/Context";
import Result from "../Components/Result";
import Page1 from "../Components/QuizPages/Page1";
import { useState } from "react";
export default function PlayDash() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState(" ");
  const [score, setScore] = useState(0);
  

  return (
    <>
 
            {userName===" "?
            <>
            <div className="container">
      
            <div className="MyPlayBg">
              <div className="row ml-5">
                <div className="col mt-5">
            <h3 className="head">Take the Quiz</h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio.
            </p>
            <form>
          <div className="form-group mt-5">
            <h4>
              <label for="exampleInputEmail1" style={{ color: "#4F5253" }}>
                Enter Your Name
              </label>
            </h4>
            <input
              type="text"
              className="form-control mt-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Name"
          
            />
          </div>

          <button
            type="button"
            className="btn btn-primary mr-5 mt-4"
            onClick={(event) => {
              setGameState("playing");
              setUserName(event.target.value);
              // alert(event.target.value)
              
              
            }}
          >
            Start Quiz
          </button>
        </form>
        </div>
        </div>
      </div>
    </div>
        </> :
            
      
            <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          
          score,
          setScore,
        }}
      >
        {gameState === "playing" && <Page1 />}
        {gameState === "finished" && <Result/>}
      </GameStateContext.Provider>
      }
</>
 
  );
}
