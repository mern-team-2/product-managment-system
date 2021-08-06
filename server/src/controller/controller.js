const { getProduct, getProducts, deleteProduct, editProduct, addProduct }  = require("../manager/productManager")
const {logger} = require('../logAndTrace/logger')
const getProductsHandler = (req, res)=>{
   getProducts()
    .then(
        (dataResp) => {
            res.statusCode = 200
            res.send(JSON.stringify(dataResp))
            logger.info(` ${res.statusCode} || getProducts() invoked`)
        },
        (errorResp) => {
            res.statusCode = 404
            res.send(errorResp)
            logger.error(`${res.statusCode } || getProducts() invoked || ${ errorResp }`);
        }
    )
}

const getProductHandler = (req, res)=>{
    let proId = parseInt(req.params.productId)
    getProduct(proId)
    .then(
        (dataResp) => {
            res.statusCode = 200
            res.send(JSON.stringify(dataResp))
            logger.info(` ${res.statusCode} || getProduct() invoked`)
        },
        (errorResp) => {
            res.statusCode = 404
            res.send(errorResp)
            logger.error(`${res.statusCode } || getProduct() invoked || ${ errorResp }`);
        }
    )
}

const addProductHandler = (req, res)=>{
    let productObj = req.body
    addProduct(productObj)
        .then(
            (dataResp) => {
                res.statusCode = 200
                res.send(dataResp)
                logger.info(` ${res.statusCode} || addProduct() invoked`)
            },
            (errorResp) => {
                res.statusCode = 404
                res.send(errorResp)
                logger.error(`${res.statusCode } || addProduct() invoked || ${ errorResp }`);
            }
        )
}

const editProductHandler = (req, res)=>{
    let productObj = req.body
    editProduct(productObj)
        .then(
            (dataResp) => {
                res.statusCode = 200
                res.send(dataResp)
                logger.info(` ${res.statusCode} || editProduct() invoked`)
            },
            (errorResp) => {
                res.statusCode = 404
                res.send(errorResp)
                logger.error(`${res.statusCode }|| editProduct() invoked || ${ errorResp }`);
            }
        )
}

const deleteProductHandler = (req, res)=>{
    let proId = parseInt(req.params.productId)
    deleteProduct(proId)
    .then(
        (dataResp) => {
            res.statusCode = 200
            res.send(JSON.stringify(dataResp))
            logger.info(` ${res.statusCode} || deleteProduct() invoked`)
        },
        (errorResp) => {
            res.statusCode = 404
            res.send(errorResp)
            logger.error(`${res.statusCode } || deleteProduct() || ${ errorResp }`);
        }
    )
}


module.exports = {
    getProductHandler,
    getProductsHandler,
    deleteProductHandler,
    addProductHandler,
    editProductHandler
}