import * as actionTypes from "./actionType";

export const getProductsSuccessActionCreator = (products:any) =>{
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS_ACTION,
        data: products
    }
}

export const getProductsFailureActionCreator = (errorText:any)=>{
    return {
        type: actionTypes.GET_PRODUCTS_FAILURE_ACTION,
        data: errorText
    }
}

export const getProductDataSuccessActionCreator = (products:any) =>{
    return {
        type: actionTypes.GET_PRODUCT_SUCCESS_ACTION,
        data: products
    }
}

export const getProductDataFailureActionCreator = (errorText:any)=>{
    return {
        type: actionTypes.GET_PRODUCT_FAILURE_ACTION,
        data: errorText
    }
}