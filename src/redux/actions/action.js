import {LOAD_CONTENTS} from "../constants/action-types";

export const loadContents = (contents) => {
    return {
        type: LOAD_CONTENTS,
        payload: contents
    }
}