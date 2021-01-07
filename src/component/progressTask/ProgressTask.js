import React,{useState} from "react";

let ProgressTask = () => {
    let {task,setTask} = useState('');

    let clickdata = () => {

    };
  return (
      <React.Fragment>
          <pre>{JSON.stringify(task)}</pre>
          <button className="btn btn-sm btn-outline-teal" onClick={clickdata}>login</button>
          <h1 className="bg-danger text-white">{task}</h1>
      </React.Fragment>
  )
};
export default ProgressTask;