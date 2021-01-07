import './App.css';
import React from "react";
import Todo from "./component/toDo/Todo";
import ProgressTask from "./component/progressTask/ProgressTask";
import Done from "./component/done/Done";
import Home from "./component/home/Home";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Test from "./component/test/Test";

let App = () => {
  return(
      <React.Fragment>
          {/*<Router>
              <Switch>
                  <Provider store={store}>
                  <Route exact path="/" component={Home}/>
                  </Provider>
              </Switch>
          </Router>*/}

          <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
              <a href="/" className="navbar-brand">Scrum Board</a>
          </nav>


            <Test/>




      </React.Fragment>
  );
};

export default App;
