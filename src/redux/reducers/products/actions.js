import actionTypes from "./actionTypes";

const productsLoadStart = () => ({
    type: actionTypes.USERS_LOAD_START,
}); 

const productsLoadSuccess = (products) => ({
    type: actionTypes.USERS_LOAD_SUCCESS,
    payload: products,
});

const productsLoadError = (errorMessage) => ({
    type: actionTypes.USERS_LOAD_ERROR,
    payload: errorMessage,
});

export default {
    productsLoadStart, productsLoadSuccess, productsLoadError,
}