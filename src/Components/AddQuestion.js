import React, { useEffect, useState } from "react";
// import './AddQuestion.css'
export const AddQuestion = (props) =>
 {
  const [question,setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2 ]= useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] = useState("");

  useEffect(() => {
    let questionDetail={
      question,option1,option2,option3,option4,correctOption,setQuestion,setOption1,setOption2,setOption3,setOption4,setCorrectOption
    }
    props.handleQuestion(props.questionNo,questionDetail);
  }, [question,option1,option2,option3,option4,correctOption]);
  

  return (
    <div className="container">
      <hr className="border-info w-100" />

      <div className="mt-3">
        {/* QB tb  */}
        <div className="row">
        <div className="input-group mb-3">
  <span className="input-group-text bg-white mr-1" id="basic-addon1">Q.{props.questionNo+1}</span>
          <input
            type="text"
            placeholder="Enter your Question here....."
            className="form-control "
            required
            onChange={(e)=>{setQuestion(e.target.value)}}
          />
          </div>
        </div>
        {/* QB tb  end */}
        {/* options */}

        {/* row  */}
        <div className="row">
          {/* first col  */}

          <div className="col p-2">
            <input
              type="text"
              style={{ height: "30px" }}
              placeholder="Option 1"
              className="form-control" 
              required
              onChange={(e)=>{setOption1(e.target.value);
                // setOption1(e.target.value);
              
              }}
            />
            <div className="form-check">
              <input required
                className="form-check-input"
                type="radio"
                name={props.id} 
                id={props.id+"option1"}
                value={option1}
                onChange={(e)=>{setCorrectOption(e.target.value)}}

              />
              <label className="form-check-label" htmlFor={props.id+"option1"}>
                Correct Answer
              </label>
            </div>
          </div>



{/* second col   */}
<div className="col p-2">
            <input
              type="text"
              style={{ height: "30px" }}
              placeholder="Option 2"
              className="form-control" 
              required
              onChange={(e)=>{setOption2(e.target.value);
                // setOption2(e.target.value);
              
              }}

/>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={props.id} 
                id={props.id+"option2"}
                value={option2}
              required
                onChange={(e)=>{setCorrectOption(e.target.value);
                
                }}


              />
              <label className="form-check-label" htmlFor={props.id+"option2"}>
                Correct Answer
              </label>
            </div>
          </div>

{/* second col end  */}


        </div>

        {/* row  */}
        <div className="row">
          {/* first col  */}

          <div className="col p-2">
            <input
              type="text"
              style={{ height: "30px" }}
              placeholder="Option 3"
              className="form-control" 
              required
              onChange={(e)=>{setOption3(e.target.value);
                // setOption3(e.target.value);
              
              }}
            />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={props.id}
                id={props.id+"option3"}
                value={option3}
              required
              onChange={(e)=>{setCorrectOption(e.target.value);}}

              />
              <label className="form-check-label" htmlFor={props.id+"option3"}>
                Correct Answer
              </label>
            </div>
          </div>



{/* second col   */}
<div className="col p-2">
            <input
              type="text"
              style={{ height: "30px" }}
              placeholder="Option 4"
              className="form-control" 
              required
              onChange={(e)=>{setOption4(e.target.value);
                // setOption4(e.target.value);
              
              }}
            />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={props.id}
                id={props.id+"option4"}
                value={option4}
              required
              onChange={(e)=>{setCorrectOption(e.target.value);}}

              />
              <label className="form-check-label" htmlFor={props.id+"option4"}>
                Correct Answer
              </label>
            </div>
          </div>

{/* second col end  */}


        </div>        
        {/* options end */}

      </div>
      <hr className="border-info w-100" />
    </div>
  );
};
