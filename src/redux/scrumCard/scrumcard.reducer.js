import {ADD_SCRUM_CARD} from "./scrumCard.actionsTypes";

export const SCRUMCARD_FEACTURE_KEY = 'cardKey';

let initialState = {

          title:'',
          discription:''


};

let scrumcardReducer = (state=initialState,action) => {
    let {type,payload} = action;
    switch (type) {
        case ADD_SCRUM_CARD:
            return{
                ...state,
                ...payload
            };
        default :return state;
    }
};

export {scrumcardReducer};