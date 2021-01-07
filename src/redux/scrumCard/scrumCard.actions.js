import {ADD_SCRUM_CARD} from "./scrumCard.actionsTypes";


let addCard = (user) => {
  return{
      type:ADD_SCRUM_CARD,
      payload:user
  }
};

export {addCard};