import {LOAD_CONTENTS, SEARCH_CONTENTS} from "../constants/action-types";

const INITIAL_STATE = {
    mainData: [],
    searchTerm: ""
}

export const loadReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case LOAD_CONTENTS: 
            return {...state, mainData: [...state.mainData, ...action.payload]}

        case SEARCH_CONTENTS:
            return {...state, searchTerm: action.payload}

        default:
            return state;
    }
}