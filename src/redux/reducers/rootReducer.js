import {combineReducers} from "redux";
import {loadReducer} from "./loadReducer";


export const rootReducer = combineReducers(
    {
        contents: loadReducer,
    }
)