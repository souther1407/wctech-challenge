
import {
    SAVE_WORD,
    WAITING,
} from "../actionName"


const initState = {
    firstWord: "",
    secondWord: "",
    thirdWord: "",
    currentWordInput: "firstWord",
    loading: false,
}


export default function rootReducer(state = initState,action) {

    switch(action.type) {
        case SAVE_WORD: {
            const nextWord =   state.currentWordInput === "firstWord" 
                            ? "secondWord" : state.currentWordInput === "secondWord" 
                            ? "thirdWord" : "firstWord";
            return {
                ...state,
                [state.currentWordInput]: action.payload.text,
                loading: false,
                currentWordInput: nextWord,
            }
        }
        case WAITING:
            return {
                ...state,
                loading:true,
            }
         default:
             return state   
    }

}