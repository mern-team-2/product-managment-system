import { ProductService } from "../service/services"
import { getProductsSuccessActionCreator, getProductsFailureActionCreator, getProductDataSuccessActionCreator, getProductDataFailureActionCreator} from "./actionCreators"

export const getProductData = (id: number) => {
    return (dispatchRef: any) => {

        ProductService.Create()
            .getProduct(id)
            .then(
                (resp:any) => {
                    let successAction = getProductDataSuccessActionCreator(resp.data)
                    dispatchRef(successAction)
                },
                (err:any) => {
                    let failAction = getProductDataFailureActionCreator(err.message)
                    dispatchRef(failAction)
                }
            )
    }
}

export const getProducts = () => {
    return (dispatchFnRef: any) => {
        
        ProductService.Create()
            .getProducts()
            .then(
                (resp:any) => {
                    if (resp.data) {
                        let sucessAction = getProductsSuccessActionCreator(resp.data)
                        dispatchFnRef(sucessAction)
                    }
                },
                (err:any) => {
                    let failAction = getProductsFailureActionCreator(err.message)
                    dispatchFnRef(failAction)
                }
            )
    }
}

export const getUpdateProducts = (data:any) => {
    return (dispatchFnRef: any) => {
        let sucessAction = getProductsSuccessActionCreator(data)
        dispatchFnRef(sucessAction)
       
    }
}