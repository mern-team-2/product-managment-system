import * as actionTypes from "./actionType";
import { productsState, productDataState} from "./state";

export const productsStateReducer = (prevState = productsState, actionObj:any)=>{
    let newState = null;
    switch (actionObj.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS_ACTION:
            newState = {
                    ...prevState,
                    products: actionObj.data,
                    errorText: ''
            }
            break;
            case actionTypes.GET_PRODUCTS_FAILURE_ACTION:
                newState = {
                    ...prevState,
                    products: [],
                    errorText: actionObj.data
                }
                break;
    
        default:
            newState = {
                ...prevState
            }
            break;
    }

    return newState
}

export const productDataStateReducer = (prevState = productDataState, actionObj:any)=>{
    let newState = null;
    switch (actionObj.type) {
        case actionTypes.GET_PRODUCT_SUCCESS_ACTION:
            newState = {
                    ...prevState,
                    product: actionObj.data,
                    errorText: ''
            }
            break;
            case actionTypes.GET_PRODUCT_FAILURE_ACTION:
                newState = {
                    ...prevState,
                    product: null,
                    errorText: actionObj.data
                }
                break;
    
        default:
            newState = {
                ...prevState
            }
            break;
    }

    return newState
}