import {combineReducers} from "redux";
import {SCRUMCARD_FEACTURE_KEY, scrumcardReducer} from "./scrumCard/scrumcard.reducer";

let rootReducer = combineReducers({
    [SCRUMCARD_FEACTURE_KEY] : scrumcardReducer
});

export {rootReducer};
