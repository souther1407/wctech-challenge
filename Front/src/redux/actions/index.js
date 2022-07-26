import {
     SAVE_WORD,
     WAITING, 
} from "../actionName";
import { BACK_URL } from "../../utils/constants.js";

export const sendWord = (word) => {
    return async (dispatch) => {
        dispatch({ type: WAITING })
        const res = await fetch(BACK_URL+`/iecho?text=${word}`);
        const data = await res.json();
        console.log(data)
        dispatch({ type: SAVE_WORD, payload: data })
    }
}