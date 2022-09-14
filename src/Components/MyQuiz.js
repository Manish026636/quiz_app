import React from "react";
import { Link } from "react-router-dom";


export default function MyQuiz(props) {
  // console.log(props.quizes);
  return (
    <div className="container">
   
          <div className="align-content-around mt-5 mb-2 p-3">
            <h3 className="ms-auto">My Quizes</h3>
            <Link to="/CreateQuiz"><button type="button" className="btn btn-primary float-right mb-3">
              Create New Quiz
            </button></Link>
          </div>
  
        <div className=" ml-5">
        <table className="table table-striped border">
    <thead>
        <tr>
            <th>Quiz No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created on</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
      { props.quizes.map((quiz)=>{
        return <tr key={quiz.title}>
          
          <td>{props.quizes.indexOf(quiz)+1}</td>
          <td>{quiz.title}</td>
          <td>{quiz.desc}</td>
          <td className="text-danger">Not Active</td>
          <td>{quiz.createdOn}</td>
          <td></td>
        </tr>
        ;
      })


      }

</tbody>
</table>
      </div>
      </div>
  );
}
