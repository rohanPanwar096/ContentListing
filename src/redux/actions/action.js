import {LOAD_CONTENTS, SEARCH_CONTENTS} from "../constants/action-types";

export const loadContents = (contents) => {
    return {
        type: LOAD_CONTENTS,
        payload: contents
    }
}

export const searchContents = (searchTerm) => {
    return {
        type: SEARCH_CONTENTS,
        payload: searchTerm
    }
}