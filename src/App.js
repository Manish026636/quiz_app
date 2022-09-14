import "./App.css";
import Navbar from "./Components/Navbar";
import PlayDash from "./Components/PlayDash";
import CreateQuiz from "./Components/CreateQuiz";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyQuiz from "./Components/MyQuiz";
import React, { useEffect, useState } from "react";
import Result from "./Components/Result";
import Page1 from "./Components/QuizPages/Page1";
function App() {
  // localStorage.removeItem("quizes");
  let quizes_info;
  if(localStorage.getItem("quizes")==null)
  {
    quizes_info=[];
  }
  else
  {
    quizes_info=JSON.parse(localStorage.getItem("quizes"));
  }
  // console.log(quizes_info); 
  // let handleQUizFromStorage=()=>
  // {
  //  quizes_info= JSON.parse(setQuizes(localStorage.getItem("quizes")));
  // }
  const [quizes,setQuizes]=useState(quizes_info);

  let handleQuizStorage=(quiz)=>
  {
    // localStorage.setItem("quizes",JSON.stringify(quiz));
    setQuizes([...quizes,quiz]);
  }
  useEffect(() => {
    localStorage.setItem("quizes", JSON.stringify(quizes));
  }, [quizes]);

  // let quiz={
  //   id:"1",
  //   title:"",
  //   desc:"",
  //   questions:
  //   {
  //     question:
  //     {
  //       questionTitle:"",
  //       option1:"",
  //       option2:"",
  //       option3:"",
  //       option4:"",
  //       correctAnswer:""
  //     }
  //   }
  // }
  return (
    <>
      <Router>
        <Navbar title={<img src="Alma.png" alt="ALma Better" height="30px" width="120px" />} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MyQuiz" element={<MyQuiz quizes={quizes} key={Math.random()} />} />
          <Route path="/PlayDash" element={<PlayDash />} key={Math.random()} />
          <Route path="/CreateQuiz" element={<CreateQuiz handleQuizStorage={handleQuizStorage} key={Math.random()} />} />
          <Route path="/Page1" element={<Page1 />} />

          <Route path="/Result" element={<Result />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
