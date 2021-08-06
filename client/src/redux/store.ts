import { createStore, combineReducers, applyMiddleware } from "redux";

import { productsStateReducer, productDataStateReducer } from "./reducers";

import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
    productsStateRef: productsStateReducer,
    productDataStateRef: productDataStateReducer
})

const middleWares = applyMiddleware(thunkMiddleware)

export const productStore = createStore(
    rootReducer,
    middleWares
)