import React, {  useState } from "react";
import "../HP.css";
import "../Components/CreateQuiz.css"
import { AddQuestion } from "./AddQuestion";
export default function CreateQuiz(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // const [desc, setdesc] = useState("");
  

 let quizQuestions=[{}];
  const [questions, setquestions] = useState([0]);
  const addQuestion = () => {
    setquestions([...questions, questions.length]);
quizQuestions.push({});
  };

let handleQuestion=(questionNo,questionDetail)=>
{
quizQuestions[questionNo]=questionDetail;
// console.log(quizQuestions);
}

  const hide = (e) => {
    let modal = document.getElementById("myModal");

    modal.style.display = "none";
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    
    const quiz={
      title:title,
      desc:desc,
      createdOn:Date().toLocaleString(),
      questions:quizQuestions
  
    }
    props.handleQuizStorage(quiz);
  }

  return (
    <>
      <div id="myModal" className="modal justify-content-around">
      <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Select Question Type</h5>
        <button type="button" className="close" onClick={hide}>&times;</button>
      </div>
      <div className="modal-body">
      <center><div className="row">
      
          <div className=" p-2 col-6"><button className="btn btn-md mcq-button w-100 btn-outline-primary">MCQ(Single Page)</button></div>
          <div className="p-2 col-6"><button className="btn btn-md mcq-button w-100 btn-outline-primary">MCQ(multiple Page)</button></div>
          </div></center>
          <center><div className="row">
          <div className="p-2  col-6"><button className="btn btn-md mcq-button w-100 btn-outline-primary">Short Answer(1 or 2 words)</button></div>
          <div className="p-2 col-6"><button className="btn btn-md mcq-button w-100 btn-outline-primary">Description(1 or 2 sentences)</button></div>
        </div></center>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  onClick={hide}>Close</button>
        <button type="button" className="btn btn-primary"  onClick={hide}>Save changes</button>
      </div>
    </div>
      </div>

      {/* label create quiz  */}
      <div className="createbg container justify-content-center ">
        
        <h2 className="head my-4" >Create New Quiz</h2>
      
        {/* label create quiz  end */}
        <form onSubmit={handleSubmit}>

        {/* questions-section  */}
        <div className=" bg-white  container mt-3 mb-3 p-3 questions-quiz">
          {/* quiz desc  */}

          <div className="p-3 questions-quiz">
            

            <div>
            <div className="div2 ml-5">
          <div className="form-group mt-2">
            <input
              type="text"
              placeholder="Add Title"
              className="form-control pb-2 pr-3"
              id="usr"
              onChange={(e)=>setTitle(e.target.value)}
                    required
            />
          </div>
        </div>
                <div className="mb-3">
                  
                <div className="form-group mt-3 ml-5 mr-5">
          <textarea
            className="form-control "
            placeholder="Add Description...."
            rows="5"
            id="comment"
            onChange={(e)=>setDesc(e.target.value)}
          ></textarea>
        </div>                </div>
            </div>
          </div>
          {/* quiz desc end */}

          {/* button-start  */}

          <div className="p-3 mt-3 questions-quiz">
            <h4 className="text-dark text-center"> Questions</h4>

            <div>
                {questions.map((e) => (
                  <AddQuestion key={e} id={e} questionNo={e} handleQuestion={handleQuestion} />
                ))}
            </div>
            <div className="text-center ">
              <button
                type="button"
                className="btn dragon btn-primary m-auto"
                style={{
                  background: "white",
                  color: "#05A5E1",
                }}
                onClick={addQuestion}
              >
                <img
                alt="Add Question"
                  src="plus.png"
                  height="20px"
                  width="20px"
                  style={{ marginRight: "10px", marginBottom: "3px" }}
                />
                Add Question
              </button>
            </div>
          </div>

          {/* button-end  */}
          <div className="m-3 justify-content-sm-end align-items-end d-flex">
            <button
              className="btn btn-primary  ms-auto btn-primary"
              type="submit"
            >Save
            </button>
    
        </div>
        </div>
        </form>


      </div>
      {/* questions-section  end */}
    </>
  );
}
