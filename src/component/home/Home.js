import React from "react";
import Todo from "../toDo/Todo";
import ProgressTask from "../progressTask/ProgressTask";
import Done from "../done/Done";

let Home = () => {
  return (
      <React.Fragment>
          <div className="container mt-3">
              <div className="row">
                  <div className="col-md-4">
                      <Todo/>
                  </div>
                  <div className="col-md-4">
                      <ProgressTask/>
                  </div>
                  <div className="col-md-4">
                      <Done/>
                  </div>
              </div>
          </div>
      </React.Fragment>
  )
};

export default Home;