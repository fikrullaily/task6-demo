import actionTypes from "./actionTypes";
import initialStates from "./initialStates";

const productsReducer = (state = initialStates, { type, payload }) => {
    switch(type){
        case actionTypes.USERS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                products: null,
                errorMessage: null,
            };
        case actionTypes.USERS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: payload,
            };
        case actionTypes.USERS_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            };
        
        default: return state;
    }
};

export default productsReducer