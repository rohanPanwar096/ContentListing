import {LOAD_CONTENTS} from "../constants/action-types";

const INITIAL_STATE = []

export const loadReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case LOAD_CONTENTS: 
            return {...action.payload}

        default:
            return state;
    }
}