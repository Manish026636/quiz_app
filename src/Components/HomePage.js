import * as React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div
                className="hp"
                style={{
                  backgroundImage: `url("CQPQ.png")`,
                }}
              >
                <Link to="/PlayDash" className="nav-link">
                  <h3
                    style={{
                      marginTop: "100px",
                      marginBottom: "100px",
                      fontFamily: "arial",
                      fontWeight: "80px",
                    }}
                  >
                    Play Quiz
                  </h3>
                </Link>
              </div>
            </div>
            <div className="col-sm">
              <div
                className="hp"
                style={{
                  backgroundImage: `url("CQCQ.png")`,
                }}
              >
                <Link to="/CreateQuiz" className="nav-link">
                  <h3
                    style={{
                      marginTop: "100px",
                      marginBottom: "100px",
                      fontFamily: "arial",
                      fontWeight: "80px",
                    }}
                  >
                    CreateQuiz
                  </h3>
                </Link>
              </div>
            </div>
            <div className="col-sm">
              <div
                className="hp"
                style={{
                  backgroundImage: `url("CQMQ.png")`,
                }}
              >
                <Link to="/MyQuiz" className="nav-link">
                  <h3
                    style={{
                      marginTop: "100px",
                      marginBottom: "100px",
                      fontFamily: "arial",
                      fontWeight: "80px",
                    }}
                  >
                    MyQuiz
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
