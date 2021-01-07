import React from "react";
import Board from "react-trello";
import data from "../test/data.json"
import {useSelector} from "react-redux";
import {SCRUMCARD_FEACTURE_KEY} from "../../redux/scrumCard/scrumcard.reducer";

let Done = () => {
    let cardInfo = useSelector((state)=>{
        return state[SCRUMCARD_FEACTURE_KEY]
    });
  return (
      <React.Fragment>

      </React.Fragment>
  )
};

export default Done;