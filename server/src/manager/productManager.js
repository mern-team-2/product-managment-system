const { readProducts, readProduct, writeProducts, removeProduct, updateProduct} = require("../operations/productOperations")

const addProduct = ( productObj) =>{
    return new Promise(
        (resolve, reject)=>{

            readProducts((error, data)=>{
                if(error){
                    reject(error)
                }

                if(data){
                    let products = data
                    let found = products.find( f => f.productId === productObj.productId)
                    if(!found){
                        writeProducts(
                            productObj,
                            ()=>{
                                resolve("data added succesfully!")
                            }
                        )
                    }else{
                        reject("duplicate data found!!")
                    }
                }
            })
        }
    )
}

const getProducts = () =>{
    return new Promise(
        (resolve, reject) => {

            readProducts((error, data) => {
                if (error){
                    reject(error)
                }
                if(data){
                    resolve(data)
                }
                   
            })
        }
    )
}

const getProduct = (ID) =>{
    return new Promise(
        (resolve, reject) => {

            readProducts((error, data)=>{
                if(error){
                    reject(error)
                }
                let products = data
                let found = products.find( f => f.productId === ID )
                if(found){
                    readProduct( ID, (error, data) => {
                        if (error){
                            reject(error)
                        }
                        if(data){
                            resolve(data)
                        }
                           
                    })
                }else{
                    reject("No data found with this ID")
                }
            })
        }
    )
}


const deleteProduct = ( ID) =>{
    return new Promise(
        (resolve, reject)=>{

            readProducts((error, data)=>{
                if(error){
                    reject(error)
                }

                if(data){
                    let products = data
                    let found = products.find( f => f.productId === ID )

                    if(found){
                        removeProduct(
                            ID,
                            ()=>{
                                resolve("data deleted succesfully!")
                            }
                        )
                    }else{
                        reject("ID not found!!")
                    }
                }
            })
        }
    )
}



const editProduct = (productObj) =>{
    return new Promise(
        (resolve, reject)=>{

            readProducts((error, data)=>{
                if(error){
                    reject(error)
                }

                if(data){
                    let products = data
                    let found = products.find( f => f.productId ===productObj.productId )
                    if(found){
                        updateProduct(
                            productObj.productId,
                            productObj,
                            ()=>{
                                resolve("data updated succesfully!")
                            }
                        )
                    }else{
                        reject("No match ID found!!")
                    }
                }
            })
        }
    )
}


module.exports = { 
    getProduct,
    getProducts,
    editProduct,
    deleteProduct,
    addProduct
}